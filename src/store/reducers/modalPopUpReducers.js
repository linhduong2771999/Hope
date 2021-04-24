
const initialState = {
    isOpen: false,
    popupName: undefined,
    popupProps: null
}
const modalPopupReducers = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case "OPEN_POPUP":
            return {
                ...state,
                isOpen: true,
                popupName: payload.popupName,
                popupProps: payload.popupProps
            }
        case "HIDE_POPUP":
            return {
                ...state,
                isOpen: false,
                popupName: payload.popupName,
                popupProps: payload.popupProps
            }
        // case "KILL_POPUP":
        //     return {
        //         ...state,
        //         isOpen: true,
        //         popupName,
        //         popupProps
        //     }
        default:
            return state;
    }
}

export default modalPopupReducers