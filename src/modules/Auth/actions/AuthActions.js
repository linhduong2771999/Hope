export const LOGIN_ACCOUNT_REQUEST = "LOGIN_ACCOUNT_REQUEST";
export const LOGIN_ACCOUNT_SUCCESS = "LOGIN_ACCOUNT_SUCCESS";
export const LOGIN_ACCOUNT_ERROR = "LOGIN_ACCOUNT_ERROR";
export const SIGNUP_ACCOUNT_REQUEST = "SIGNUP_ACCOUNT_REQUEST";
export const SIGNUP_ACCOUNT_SUCCESS = "SIGNUP_ACCOUNT_SUCCESS";
export const SIGNUP_ACCOUNT_ERROR = "SIGNUP_ACCOUNT_ERROR";
export const CHECKED_LOGIN_ACCOUNT_REQUEST = "CHECKED_LOGIN_ACCOUNT_REQUEST";
export const CHECKED_LOGIN_ACCOUNT_SUCCESS = "CHECKED_LOGIN_ACCOUNT_SUCCESS";
export const CHECKED_LOGIN_ACCOUNT_ERROR = "CHECKED_LOGIN_ACCOUNT_ERROR";



export const loginAccountRequest = (payload) => ({
    type: LOGIN_ACCOUNT_REQUEST,
    payload
})

export const loginAccountSuccess = (payload) => ({
    type: LOGIN_ACCOUNT_SUCCESS,
    payload
})

export const loginAccountError = (payload) => ({
    type: LOGIN_ACCOUNT_ERROR,
    payload
})

export const signupAccountRequest = (payload) => ({
    type: SIGNUP_ACCOUNT_REQUEST,
    payload
})

export const signupAccountSuccess = (payload) => ({
    type: SIGNUP_ACCOUNT_SUCCESS,
    payload
})

export const signupAccountError = (payload) => ({
    type: SIGNUP_ACCOUNT_ERROR,
    payload
})

export const checkedLoginAccountRequest = (payload) => ({
    type: CHECKED_LOGIN_ACCOUNT_REQUEST,
    payload
})

export const checkedLoginAccountSuccess = (payload) => ({
    type: CHECKED_LOGIN_ACCOUNT_SUCCESS,
    payload
})

export const checkedLoginAccountError = (payload) => ({
    type: CHECKED_LOGIN_ACCOUNT_ERROR,
    payload
})