import {callAPI} from "../../../helpers/axios";
import {type, model} from "../../../helpers/constants";

export const checkedLoginAccount = () => {
    return callAPI(type.GET, model.ACCOUNT, "auths/", "GET", null)
}

export const loginAccount = (account) => {
    return callAPI(type.SIGN_IN, model.ACCOUNT, "auths/login", "POST", account)
}

export const signupAccount = (account) => {
    return callAPI(type.SIGN_UP, model.ACCOUNT, "auths/signup", "POST", account)
}