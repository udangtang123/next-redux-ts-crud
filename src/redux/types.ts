export const MODAL_OPEN = "MODAL_OPEN";

export const USER_SELECTED = "USER_SELECTED";

export const USER_FETCH_REQUESTED = "USER_FETCH_REQUESTED";
export const USER_FETCH_SUCCEEDED = "USER_FETCH_SUCCEEDED";
export const USER_FETCH_FAILED = "USER_FETCH_FAILED";

export const USER_ADD_REQUESTED = "USER_ADD_REQUESTED";
export const USER_ADD_SUCCEEDED = "USER_ADD_SUCCEEDED";
export const USER_ADD_FAILED = "USER_ADD_FAILED";

export const USER_UPDATE_REQUESTED = "USER_UPDATE_REQUESTED";
export const USER_UPDATE_SUCCEEDED = "USER_UPDATE_SUCCEEDED";
export const USER_UPDATE_FAILED = "USER_UPDATE_FAILED";

export const USER_DELETE_REQUESTED = "USER_DELETE_REQUESTED";
export const USER_DELETE_SUCCEEDED = "USER_DELETE_SUCCEEDED";
export const USER_DELETE_FAILED = "USER_DELETE_FAILED";

export interface User {
    id: number;
    name: string;
    // email: string;
    // phone: string;
    // website: string;
    firstname: string,
    lastname: string,
  }
  

