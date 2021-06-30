import { toast } from "react-toastify";
import "./Notifies.scss"
export const loginSuccessNotification = (option = {}) => {

    if(typeof option !== "object") return alert("Option must be an object");

    return toast.success("✔ Login successfull!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: option.className || "Toastify__toast-login",
            autoClose: 3500,
    })
}

export const validateErrorNotification = (message) => {

    return toast.error(`❌ ${message}`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      })
}

export const infoNotification = (option) => {
    if(typeof option !== "object") return alert("Option must be an object");

    return toast.info(option.component, {
        position: option.position || "top-left",
        autoClose: option.autoClose || 2000,
        hideProgressBar: option.hideBar
    })
}