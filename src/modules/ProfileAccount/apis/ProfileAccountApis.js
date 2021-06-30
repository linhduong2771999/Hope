import { callAPI } from "../../../helpers/axios";
import { type, model } from "../../../helpers/constants";

export const updatePassword = (account) => {
    return callAPI(type.UPDATE, model.ACCOUNT, "auths/updatePassword", "PATCH", account);
}