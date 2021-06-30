import {combineReducers} from "redux";
import ModalPopupReducers from "./modalPopUpReducers";
import LoadingReducers from "./loadingReducers";
import AuthReducers from "../../modules/Auth/reducers/AuthReducers";
import ProfileAccountReducers from "../../modules/ProfileAccount/reducers/ProfileAccountReducers";
// const reducers = [
   
// ]
const rootReducer = combineReducers({
    ModalPopupReducers,
    AuthReducers,
    LoadingReducers,
    ProfileAccountReducers
})
export default rootReducer;

// export {
//     authReducers,
//     userManagerReducer
// };