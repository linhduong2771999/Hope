import {combineReducers} from "redux";
import ModalPopupReducers from "./modalPopUpReducers";
import LoadingReducers from "./loadingReducers";
import AuthReducers from "../../modules/Auth/reducers/AuthReducers";
// const reducers = [
   
// ]
const rootReducer = combineReducers({
    ModalPopupReducers,
    AuthReducers,
    LoadingReducers
})
export default rootReducer;

// export {
//     authReducers,
//     userManagerReducer
// };