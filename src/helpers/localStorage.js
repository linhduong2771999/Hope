export const setTimestamps = (payload) => {
    try{
        const { minutes, hours, month } = payload || 0; 
        const now = new Date();
    
        if(minutes) now.setMinutes(now.getMinutes() + minutes);
        if(hours) now.setHours(now.getHours() + hours);
        if(month) now.setMonth(now.getMonth() + month);
        return now.getTime();
    } catch(error) {
        return console.log("Set timestamp error: ", error)
    }
}

export const setLocalStorage = (key, value, date = {}) => {
    if(key === "undefinded" || !key) return "Error localstorage key";

    let expired = setTimestamps(date);

    const item = {
        value,
        exp: expired
    }

    return localStorage.setItem(key, JSON.stringify(item));
}

export const getLocalStorage = (key) => {
    if(!key || key === "undefinded") throw "Error localstorage key";
    
    const item = JSON.parse(localStorage.getItem(key));
    const currentTime = new Date();
    if(!item) return null;

    if(item.exp < currentTime.getTime()) {
        localStorage.removeItem(key);
        return "Key has expired";
    }

    return item;
}

export const removeLocalStorage = (key) => {
    if(!key || key === "undefinded") return "Error localstorage key";

    localStorage.removeItem(key);
    return null;
}