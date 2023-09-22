import { HYDRATE } from "next-redux-wrapper";
import * as userActions from "../actions/userActions";
import * as types from "../types";

const initialState = {
	employeeList: [],
	selectedEmployee: undefined,
	isModalOpen: false,
};

const mainReducer = (state = initialState, action:any) => {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload };
		case types.MODAL_OPEN:
			return {
				...state,
				isModalOpen: action.payload,
			};
		case types.USER_FETCH_SUCCEEDED:
			return {
				...state,
				employeeList: action.payload,
			};
		case types.USER_ADD_SUCCEEDED:
			return {
				...state,
				employeeList: [action.payload, ...state.employeeList],
			};
		case types.USER_UPDATE_SUCCEEDED:
			const updatedEmployee = state.employeeList.map((employee: types.User) => {
				if (employee.id == action.payload._id) {
					return {
						...employee,
						name: action.payload.name,
						firstname: action.payload.firstname,
						lastname: action.payload.lastname,
					};
				}
				return employee;
			});

			return { ...state, employeeList: updatedEmployee };
		case types.USER_DELETE_SUCCEEDED:
			const newEmployeeList = state.employeeList.filter(
				(employee: types.User) => employee.id != action.payload
			);
			return {
				...state,
				employeeList: newEmployeeList,
			};
		case types.USER_SELECTED:
			const selectedEmployee = state.employeeList.find(
				(employee: types.User) => employee.id === action.payload
			);
			return {
				...state,
				selectedEmployee,
			};
		default:
			return state;
	}
};

export default mainReducer;
