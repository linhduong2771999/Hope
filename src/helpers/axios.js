import axios from "axios";

const devUrl = "http://127.0.0.1:8080/api/v1/";
const prodUrl = "";
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
        // "authorization": `Bearer ${}`
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
                 console.log(error);
             })
        } else {
            reject({message: "Connecting Error"})
        }
    })
}