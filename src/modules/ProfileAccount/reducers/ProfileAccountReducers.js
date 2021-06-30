import UserModel from "../../../models/UserModel";
const initialState = {
    user: new UserModel({})
}

const ProfileAccountRecuders = (state = initialState, action) => {
    switch (action) {
        case "UPDATE_PASSWORD_REQUEST":
            return {
                ...state
            }
        case "UPDATE_PASSWORD_SUCCESS":
            return {
                ...state
            }
        case "UPDATE_PASSWORD_ERROR":
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}

export default ProfileAccountRecuders;