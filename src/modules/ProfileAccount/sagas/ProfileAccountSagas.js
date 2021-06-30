import * as ProfileApis from "../apis/ProfileAccountApis";
import { call, put, takeEvery } from "redux-saga/effects";
import { ProfileAccountActions } from "../../../store/actions/index";
import { setLocalStorage, removeLocalStorage } from "../../../helpers/localStorage";

function* handleUpdatePasswordRequest(action){
    const { account, callBack, fallBack } = action.payload;
    console.log(account);
    try {
        const { data } = yield call(ProfileApis.updatePassword, account);

        if(data.statusText === "OK" && data.status === 200){
            removeLocalStorage("user_token");
            removeLocalStorage("user_info");
            yield put(ProfileAccountActions.updatePasswordSuccess(data));
            callBack && callBack(data.message);
        }
    } catch (error) {
        removeLocalStorage("user_token");
        removeLocalStorage("user_info");
        if(error.statusText === "Error"){
            yield ProfileAccountActions.updatePasswordError(error);
            fallBack && fallBack(error.message); 
        }
    }
}   

function* updatePasswordRequest(){
    yield takeEvery(ProfileAccountActions.UPDATE_PASSWORD_REQUEST, handleUpdatePasswordRequest)
}

export default {
    updatePasswordRequest
}