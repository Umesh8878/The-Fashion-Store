
let formdata=document.querySelector("form");
let firstname=document.querySelector(".firstname_list");
let lastname=document.querySelector(".lastname_list");
let email=document.querySelector(".email_list");
let password=document.querySelector(".new_password_list");
let confirm_password=document.querySelector(".confirm_password_list");
let mobile_num=document.querySelector(".mobile_number_list");

let register=JSON.parse(localStorage.getItem("register"))||[];
formdata.addEventListener("submit",(e)=>{
    e.preventDefault();
   if(password.value==confirm_password.value){
    let dataobj={
      firstname:firstname.value,
      lastname:lastname.value,
      email:email.value,
      password:password.value,
      confirm_password:confirm_password.value,
      mobile:mobile_num.value
  }
   register.push(dataobj)
  localStorage.setItem("register",JSON.stringify(register));
   }else{
    alert("Enter Correct Password")
   }
   
})


