export const checkValidData=(email,pass)=>{
const isEamilValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPassValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
.test(pass);

if(!isEamilValid) return "Email Id is not valid"
if(!isPassValid) return "Password is not valid";

return null;
}