export const UPDATE_PASSWORD_REQUEST = "UPDATE_PASSWORD_REQUEST";
export const UPDATE_PASSWORD_SUCCESS = "UPDATE_PASSWORD_SUCCESS";
export const UPDATE_PASSWORD_ERROR = "UPDATE_PASSWORD_ERROR";

export const updatePasswordRequest = (payload) => ({
    type: UPDATE_PASSWORD_REQUEST,
    payload
})

export const updatePasswordSuccess = (payload) => ({
    type: UPDATE_PASSWORD_SUCCESS,
    payload
})

export const updatePasswordError = (payload) => ({
    type: UPDATE_PASSWORD_ERROR,
    payload
})