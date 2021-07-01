class UserFactory { 
    constructor(data){
        if(typeof data === "object"){
            this.id = data._id || ""
            this.name = data.name || ""
            this.createAt = data.createAt || Date.now();  
            this.lastLoginAt = data.lastLoginAt || Date.now();
            this.email = data.email || ""   
            this.role = data.role || ["USER"]   
            this.phone = data.phone || ""
            this.profile = data.profile || {
                dob: "",
                full_name: "",
                description: "",
                gender: "",
                about_me: "",
                address: "",
                photoUrl: "",
                country: "Vietnam"
            }   
            this.slug = data.slug || ""
    
            return this;
        }

        return;
    }
}


export default UserFactory;