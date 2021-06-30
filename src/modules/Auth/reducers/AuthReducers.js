import UserFactory from "../../../models/UserModel";

const initialState = {
    user: new UserFactory({}),
    // isAuthenticated: false
}

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_ACCOUNT_REQUEST":
            return {
                ...state,
                // isAuthenticated: false
            }
        case "LOGIN_ACCOUNT_SUCCESS": {
            const user = new UserFactory(action.payload);
            return {
                ...state,
                user,
                // isAuthenticated: true
            }
        }
        case "LOGIN_ACCOUNT_ERROR":
            return {
                ...state,
                // isAuthenticated: false,
                error: action.payload
            }
        /*-----@@-----*/
        case "SIGNUP_ACCOUNT_REQUEST": {
            return {
                ...state
            }
        }       
        case "SIGNUP_ACCOUNT_SUCCESS": {
            const user = new UserFactory(action.payload);
            return {
                ...state,
                user
            }
        }    
        case "SIGNUP_ACCOUNT_ERROR": {
            return {
                ...state
            }
        }   
        /*-----@@-----*/
        case "CHECKED_LOGIN_ACCOUNT_REQUEST":
            return{
                ...state
            }
        case "CHECKED_LOGIN_ACCOUNT_SUCCESS": {
            const user = new UserFactory(action.payload);
            return{
                ...state,
                user
            }
        }
        case "CHECKED_LOGIN_ACCOUNT_ERROR": {
            return{
                ...state
            }
        }
        /*-----@@-----*/
        case "FORGOT_PASSWORD_REQUEST": {
            return{
                ...state
            }
        }
        case "FORGOT_PASSWORD_SUCCESS": {
            return{
                ...state
            }
        }
        case "FORGOT_PASSWORD_ERROR": {
            return{
                ...state
            }
        }
        /*-----@@-----*/
        case "RESET_PASSWORD_REQUEST": {
            return{
                ...state
            }
        }
        case "RESET_PASSWORD_SUCCESS": {
            return{
                ...state
            }
        }
        case "RESET_PASSWORD_ERROR": {
            return{
                ...state
            }
        }
        default:
            return {
                ...state
            }
    }
} 

export default authReducers;