import * as types from "../types";


export const setModalOpen = (isModalOpen:boolean) => {
	return {
		type: types.MODAL_OPEN,
		payload: isModalOpen,
	};
};

export const fetchEmployees = () => {
	return {
		type: types.USER_FETCH_REQUESTED,
	};
};

export const addEmployee = (user: types.User) => {
	return {
		type: types.USER_ADD_REQUESTED,
		payload: user,
	};
};

export const updateEmployee = (user: types.User) => {
	return {
		type: types.USER_UPDATE_REQUESTED,
		payload: user,
	};
};

export const deleteEmployee = (id: number) => {
	return {
		type: types.USER_DELETE_REQUESTED,
		payload: id,
	};
};

export const setSelectedEmployee = (id: any) => {
	return {
		type: types.USER_SELECTED,
		payload: id,
	};
};


