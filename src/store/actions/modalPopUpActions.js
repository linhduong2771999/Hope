export const OPEN_POPUP = "OPEN_POPUP";
export const HIDE_POPUP = "HIDE_POPUP";
export const KILL_POPUP = "KILL_POPUP";

export const openPopup = (payload) => ({
    type: OPEN_POPUP,
    payload
})

export const hidePopup = (payload) => ({
    type: HIDE_POPUP,
    payload
})

export const killPopup = (payload) => ({
    type: KILL_POPUP,
    payload
})