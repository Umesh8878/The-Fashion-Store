let container = document.getElementById("container");
let cart = JSON.parse(localStorage.getItem("wishlist")) || [];
let box = document.getElementById("box")
let checkout = document.getElementById("checkout");


function Display(data){
    let total = document.createElement("h3");
    box.innerHTML = "";
    let cardo = document.createElement("div")
    container.innerHTML = "";
    let h1 = "Your wishlist is empty"
    if(cart.length===0){
        container.textContent = h1;
    }
    cart.forEach(element => {
        
        let card = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src",element.avatar);

        let name = document.createElement("h3")
        name.textContent = element.name;

        let price = document.createElement("h5");
        price.textContent = "$ "+element.price;

        let qnty = document.createElement("span");
        qnty.textContent = element.quantity;

        let removebtn = document.createElement("button");
        removebtn.textContent = "Remove";
            removebtn.addEventListener("click",function(){
                cart = cart.filter((ele)=>{
                    return ele.id !==element.id;
                })
                localStorage.setItem("cart",JSON.stringify(cart));
                Display();
            });
            
        card.append(img,name,price,qnty,removebtn)
        container.append(card);
    })
    let sum = 0;
    for(let i=0; i<cart.length; i++){
        sum+=cart[i].price*cart[i].quantity;
    }
    heading = document.createElement("h1");
    heading.textContent = "Order Summary"
    total.textContent = "Subtotal = $ "+sum;
    
    // if(sum===0){
    //     checkout.innerText === "";
    // }
    // btn = document.createElement("button");
    // btn.setAttribute("href",checkout.html)
    // btn.textContent = "Checkout"
    cardo.append(heading,total);
    box.append(cardo)
}
Display();