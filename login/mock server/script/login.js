let formdata=document.querySelector("form");
let number=document.querySelector(".number_list");
let password=document.querySelector(".password_list");
let username=document.querySelector("#username_list")
let register=JSON.parse(localStorage.getItem("register"))||[];
formdata.addEventListener("submit",(e)=>{
   e.preventDefault();

   register= register.filter((elem)=>{
      return number.value==elem.mobile&&password.value==elem.password;
   })
   
  if(register==""){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'PLEASE ENTER CORRECT PASSWORD',
      
      })
      formdata.reset();
      console.log(register)
  }else{
    Swal.fire({
        icon: 'success',
        title: 'Congratulation',
        text: 'LOGIN SUCCESSFUL',
      
      })
      formdata.reset();
  }
  usernameappend(register)
  
})

function usernameappend(data){
    let x='';
    data.forEach(element => {
        
        x+=` <a href="login.html"> <h2> ${element.firstname} ${element.lastname}</h2></a>`
       
    });
    username.innerHTML=x;
}