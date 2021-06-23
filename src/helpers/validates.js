export const validateEmail = (email) => {
    var re = /^(([^=<>()\[\]\\.,;:\s@"]+(\.[^=<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log(re.test(email));
    return re.test(email);
}

export const  validateStrengthPassword = (password) => {
    const re = /(?=.*[A-Z])/;
    const re1 = /(?=.*[a-z])/;
    // const re2 = /(?=.*[!@#$%^&*])/; && re2.test(password)
    const re2 = /(?=.{8,})/;
    const re3 = /(?=.*[0-9])/;
    return (re.test(password) && re1.test(password) && re2.test(password) && re3.test(password));
}

export const validatePhoneNumber = (number) => {
const re = /^\d{10}$/ ;
return re.test(number);
}

export const validateName = (name) => {
    var re = /^[a-zA-Z 'áàảãạâấầẩẫậăắằẳẵặđíìỉĩịóòỏõọơớờởỡợôốồổỗộéèẻẽẹêếềểễệúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÍÌỈĨỊÓÒỎÕỌƠỚỜỞỠỢÔỐỒỔỖỘGGÉÈẺẼẸÊẾỀỂỄỆÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ]*$/
    // console.log(re.test(name));
    return re.test(name) && String(name).length > 5;
}

export const validateNumber = (text) => {
var re = /^[0123456789]*$/
return re.test(text)
}