import  moment from "moment";

export const formatDate = (date) => {
    if(!date) return "???";
    
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}