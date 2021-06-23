import { all, fork } from "redux-saga/effects";
import { flatten } from 'lodash/array';
import { values } from 'lodash/object';

import AuthSagas from "../modules/Auth/sagas/AuthSagas";
const sagaList = [
    AuthSagas
]

export default function* () {
    yield all(
        flatten(sagaList.map(sagas => values(sagas))).map(saga => fork(saga))
    )
}