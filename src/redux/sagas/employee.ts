import { all, put, takeLatest } from "redux-saga/effects";
import * as t from "../types";

function* fetchEmployees(): Generator<any, void, any> {
	try {

		const response = yield fetch("/api/users", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const employeeList = yield response.json();

		yield put({
			type: t.USER_FETCH_SUCCEEDED,
			payload: employeeList.data,
		});
	} catch (error: any) {
		yield put({
			type: t.USER_FETCH_FAILED,
			payload: error.message,
		});
	}
}

function* watchFetchEmployees() {
	yield takeLatest(t.USER_FETCH_REQUESTED, fetchEmployees);
}

function* addEmployee(action: any) : Generator<any, void, any>{
	try {
		const response = yield fetch("/api/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(action.payload),
		});

		const newEmployee = yield response.json();

		yield put({
			type: t.USER_ADD_SUCCEEDED,
			payload: newEmployee.data,
		});
	} catch (error: any) {
		yield put({
			type: t.USER_ADD_FAILED,
			payload: error.message,
		});
	}
}

function* watchAddEmployee() {
	yield takeLatest(t.USER_ADD_REQUESTED, addEmployee);
}

function* deleteEmployee(action: any):Generator<any, void, any> {
	try {
		const response = yield fetch("/api/users", {
			method: "DELETE",
			headers: {id: action.payload}
		});
		const deletedEmployee = yield response.json();

		yield put({
			type: t.USER_DELETE_SUCCEEDED,
			payload: deletedEmployee.userId,
		});
	} catch (error: any) {
		yield put({
			type: t.USER_DELETE_FAILED,
			payload: error.message,
		});
	}
}

function* watchRemoveEmployee() {
	yield takeLatest(t.USER_DELETE_REQUESTED, deleteEmployee);
}

function* updateEmployee(action: any): Generator<any, void, any> {
	try {
		const response = yield fetch(`/api/users`, {
			method: "PUT",
			// query: {id: },
			headers: {
				"Content-Type": "application/json",
				"id":action.payload._id
			},
			body: JSON.stringify(action.payload),
		});

		const updatedEmployee = yield response.json();
		yield put({
			type: t.USER_UPDATE_SUCCEEDED,
			payload: updatedEmployee.uploadedUser,
		});
	} catch (error: any) {
		yield put({
			type: t.USER_UPDATE_FAILED,
			payload: error.message,
		});
	}
}

function* watchUpdateEmployee() {
	yield takeLatest(t.USER_UPDATE_REQUESTED, updateEmployee);
}

export default function* rootSaga() {
	yield all([
		watchFetchEmployees(),
		watchAddEmployee(),
		watchRemoveEmployee(),
		watchUpdateEmployee(),
	]);
}
