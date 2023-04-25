export const rootDomain="https//localhost"
export const validateEmail=(email:string)=>{
    //regex email
    const regexEmail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(regexEmail.test(email)){
        return true
    }
    return false;
};
