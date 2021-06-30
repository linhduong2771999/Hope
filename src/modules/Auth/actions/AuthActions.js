export const LOGIN_ACCOUNT_REQUEST = "LOGIN_ACCOUNT_REQUEST";
export const LOGIN_ACCOUNT_SUCCESS = "LOGIN_ACCOUNT_SUCCESS";
export const LOGIN_ACCOUNT_ERROR = "LOGIN_ACCOUNT_ERROR";
export const SIGNUP_ACCOUNT_REQUEST = "SIGNUP_ACCOUNT_REQUEST";
export const SIGNUP_ACCOUNT_SUCCESS = "SIGNUP_ACCOUNT_SUCCESS";
export const SIGNUP_ACCOUNT_ERROR = "SIGNUP_ACCOUNT_ERROR";
export const CHECKED_LOGIN_ACCOUNT_REQUEST = "CHECKED_LOGIN_ACCOUNT_REQUEST";
export const CHECKED_LOGIN_ACCOUNT_SUCCESS = "CHECKED_LOGIN_ACCOUNT_SUCCESS";
export const CHECKED_LOGIN_ACCOUNT_ERROR = "CHECKED_LOGIN_ACCOUNT_ERROR";
export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";



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

export const forgotPasswordRequest = (payload) => ({
    type: FORGOT_PASSWORD_REQUEST,
    payload
})

export const forgotPasswordSuccess = (payload) => ({
    type: FORGOT_PASSWORD_SUCCESS,
    payload
})

export const forgotPasswordError = (payload) => ({
    type: FORGOT_PASSWORD_ERROR,
    payload
})

export const resetPasswordRequest = (payload) => ({
    type: RESET_PASSWORD_REQUEST,
    payload
})

export const resetPasswordSuccess = (payload) => ({
    type: RESET_PASSWORD_SUCCESS,
    payload
})

export const resetPasswordError = (payload) => ({
    type: RESET_PASSWORD_ERROR,
    payload
})