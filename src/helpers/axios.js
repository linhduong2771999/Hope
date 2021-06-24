import axios from "axios";
import { getLocalStorage } from "./localStorage";

const devUrl = "http://127.0.0.1:8080/api/v1";
const prodUrl = "";
const token = getLocalStorage("user_token") || {};

export function callAPI(
    type,
    modal,
    endpoint,
    method = "GET",
    body,
    headers = {
        Accept: "application/json",
        "Content-type": "application/json",
        "cache-control": "no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
        "authorization": `Bearer ${token.value}`
    }
) {
    return new Promise((resolve, reject) => {
        if(type && modal) {
             axios({
                 method,
                 url: `${devUrl}/${endpoint}`,
                 data: body,
                 headers
             })
             .then((response) => {
                 console.log(response);
                 resolve(response);
             })
             .catch((error) => {
                 const errorResponse = ( ((error || {}).response || {}).data || {} ); // deeply check
                 if(error.message === "Network Error") {
                     reject(error)
                    } else {
                     reject(errorResponse)
                 }
             })
        } else {
            reject({message: "Connecting Error"})
        }
    })
}