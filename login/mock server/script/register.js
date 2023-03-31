
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
    let dataobj={
      firstname:firstname.value,
      lastname:lastname.value,
      email:email.value,
      password:password.value,
      confirm_password:confirm_password.value,
      mobile:mobile_num.value
  }
   if(duplicat(dataobj)){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'USER IS ALREADY EXISTS',
    
    })
    formdata.reset();
   }else{
    if(password.value==confirm_password.value){
    
     register.push(dataobj)
    localStorage.setItem("register",JSON.stringify(register));
    Swal.fire({
      icon: 'success',
      title: 'Congratulations',
      text: 'REGISRATION IS SUCCESSFUL',
    
    })
    formdata.reset();
     }else{
      Swal.fire({
        icon: 'error',
        title:  'Oops...',
        text: 'ENTER CURRECT PASSWORD',
      
      })
      formdata.reset();
     }
   }
   
})


function duplicat(element){
  for(let i=0; i<register.length; i++){
      console.log(register[i])
    if(register[i].mobile==element.mobile){
      return true;
    }else  if(register[i].email==element.email){
      return true;
    }
    
  }
  return false;
}