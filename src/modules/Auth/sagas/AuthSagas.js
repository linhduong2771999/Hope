import * as AuthApis from "../apis/AuthApis";
import { AuthActions } from "../../../store/actions/index";
import { call, put, takeEvery, delay } from "redux-saga/effects";
import { setLocalStorage, removeLocalStorage } from "../../../helpers/localStorage";

function* handleLoginAccountRequest(action) {
  const { account,  callBack, fallBack} = action.payload;
  try {
    const {data} = yield call(AuthApis.loginAccount, account);
    if(data.statusText === "OK"){
      setLocalStorage("user_token", data.token, {month: 1});
      setLocalStorage("user_info", data.user, {month: 1});
      yield put(AuthActions.loginAccountSuccess(data.user));
      callBack && callBack();
    }
  } catch (error) {
    yield put(AuthActions.loginAccountError(error));
    fallBack && fallBack(error.error.message);
  }
}

function* handleSignupAccountRequest(action) {
  const { account, callBack, fallBack } = action.payload;
  try {
    const {data} = yield call(AuthApis.signupAccount, account);
    if(data.statusText === "OK"){
      setLocalStorage("user_token", data.token, {month: 1});
      setLocalStorage("user_info", data.user, {month: 1});
      yield put(AuthActions.signupAccountSuccess(data.user));
      callBack && callBack();
    }
  } catch (error) {
    yield AuthActions.signupAccountError(error);
    fallBack && fallBack(error.error.message);
  }
}

function* handleCheckedLoginAccountRequest(action) {
  yield delay(2000);
  try {
    const {data} = yield call(AuthApis.checkedLoginAccount, action.payload);
    if(data.statusText === "OK"){
      setLocalStorage("user_token", data.token, {month: 1});
      setLocalStorage("user_info", data.user, {month: 1});
      yield put(AuthActions.checkedLoginAccountSuccess(data.user))
    }
  } catch (error) {
    removeLocalStorage("user_token");
    removeLocalStorage("user_info");
    yield put(AuthActions.checkedLoginAccountError(error))
  }
}

function* loginAccountRequest() {
  yield takeEvery(AuthActions.LOGIN_ACCOUNT_REQUEST, handleLoginAccountRequest);
}

function* signupAccountRequest() {
  yield takeEvery(AuthActions.SIGNUP_ACCOUNT_REQUEST, handleSignupAccountRequest);
}

function* checkedLoginAccountRequest() {
  yield takeEvery(AuthActions.CHECKED_LOGIN_ACCOUNT_REQUEST, handleCheckedLoginAccountRequest);
}

export default {
  loginAccountRequest,
  signupAccountRequest,
  checkedLoginAccountRequest
};
