let formdata=document.querySelector("form");
let number=document.querySelector(".number_list");
let password=document.querySelector(".password_list");
let username=document.querySelector("#username_list")
let register=JSON.parse(localStorage.getItem("register"))||[];


formdata.addEventListener('submit', (e)=>{
  e.preventDefault()
  
  fetch(`https://weary-bee-train.cyclic.app/register`)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    if(check(data)){
      Swal.fire({
          icon: 'success',
          text: 'WELCOME ADMIN',
        
        })

        window.location.href="/admin-pages/mendata.html"
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'WRONG CREDENTIALS',
      
      })
    }
   
  })

  // formdata.reset()
})

function check(data){


  for(let i=0; i<data.length; i++){

    if(data[i].email==number.value && data[i].password==password.value){

      return true
    }
    else{
      false
    }

    

  }

}