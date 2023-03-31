let bagdata=JSON.parse(localStorage.getItem("cart-item"))||[];
let bagcontainer=document.querySelector("#bag-container");
let bag_img_left=document.querySelector(".bag-img-left");
let bag_data_center=document.querySelector(".bag-data-center");
let left_bag_list=document.querySelector("#left-bag-list")



// console.log(qty_list.value);
appendbag(bagdata);

function appendbag(data){
    let x='';
    data.forEach(el => {
   
    x+=`
    <div class="cart_data_container">
    <div class="bag-img-left">
        <img src="${el.image}" alt="">
    </div>
   <div class="bag-data-center">
     <h4>${el.category}</h4>
     <p>${el.title}</p>
     <div class="select_size">
       <select name="SIZE:" id="size_list" value="size">
           <option value="SIZE">SIZE:</option>
           <option value="Size:S">Size: S</option>
           <option value="Size:L">Size: L</option>
           <option value="Size:M">Size: M</option>
           <option value="Size:XL">Size: XL</option>
           <option value="Size:XXL">Size: XXL</option>
           <option value="Size:SL">Size: SL</option>
       </select>

       <select name="Qty:" id="qty_list" value="Qty">
      
       <option value="1">Qty: ${1}</option>
       <option value="2">Qty: ${2}</option>
       <option value="3">Qty: ${3}</option>
       <option value="4">Qty: ${4}</option>
       <option value="5">Qty: ${5}</option>
       <option value="6">Qty: ${6}</option>
       </select>
      
     </div>
   </div>
   <div class="bag-data-right">
   <h3>₹ ${el.price}</h3>
   <p>Member Discount:₹ 50</p>
   </div>

</div>
<div class="btn-data-list">
   <button>REMOVE</button>
   <button>MOVE TO WISHLIST</button>
</div>
</div>
    `
      
       
    });
     

    left_bag_list.innerHTML=x;
    let qty_list=document.querySelector("#qty_list");
    console.log(qty_list.value);

}




