var oldItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let total = document.getElementById('total');
let Shipping = document.getElementById('Shipping');
let allTotal = document.getElementById('allTotal');
let Total = oldItems.reduce((a,b)=>a+b.totalPrice,0);
let shipping= Total*0.02 ;
let AllTotal=shipping+Total ;

total.innerHTML=Total;
Shipping.innerHTML=shipping.toFixed(1) ;
allTotal.innerHTML=AllTotal.toFixed(1)

let cart = document.getElementById('cart');

if (oldItems.length == 0) {
  cart.innerHTML = `
<div class="col">
<div
  class="d-flex flex-column justify-content-center align-items-center"
>
  <img
    src="../images/R.png"
    class="w-25"
    alt=""
  />
  <h1>your cart is empty</h1>
  <h3>Add product to it now</h3>
  <a href="./boot.html">

      <button  class="btn btn-primary">Shop Now</button>
  </a>
</div>
</div>
`;
}

var oldItems = JSON.parse(localStorage.getItem('cartItems'));
const cartItems = document.getElementById('cartItems');
oldItems.forEach((element, i) => {
 
  return (cartItems.innerHTML += `
  
  <div class="cart_items">
  <ul class="cart_list">
      <li class="cart_item clearfix">
          <div class="cart_item_image"><img           src=".${
            oldItems[i].image
          }"              alt=""></div>
          <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
              <div class="cart_item_name cart_info_col">
                  <div class="cart_item_title">${oldItems[i].name}</div>
                  <div class="cart_item_text">${oldItems[i].description}</div>
              </div>

              <div class="cart_item_quantity cart_info_col">
                  <div class="cart_item_title">Quantity</div>
                  <div class="cart_item_text">
                    <div class="col-md-4 col-lg-4 col-xl-3 d-flex">
<div>${oldItems[i].quantity || ''} </div>  
                     </div>

                  </div>
              </div>
              <div class="cart_item_price cart_info_col mx-2">
                  <div class="cart_item_title">Price</div>
                  <div class="cart_item_text">${oldItems[i].price}</div>
              </div>
              <div class="cart_item_total cart_info_col">
                  <div class="cart_item_title">Total</div>
                  <div class="cart_item_text">${
                    oldItems[i].totalPrice || ''
                  }</div>
              </div>

                  <a
                    onclick="removeProduct(${oldItems[i]._id})"
                    class="text-danger cart_item_title"
                    ><h1><i class="fa fa-trash" aria-hidden="true"></i></h1></a>
                </div>
              
      </li>
  </ul>
</div>`);
});


function removeProduct(product){
console.log(product)
const newItems= oldItems.filter((item)=>item._id!==product)
localStorage.setItem('cartItems', JSON.stringify(newItems));
location.reload();
}
function clearCart() {
  localStorage.clear();
  location.reload()
}

const Items = document.getElementById('Items');

$(document).ready(function () {
  const items = JSON.parse(localStorage.getItem('cartItems')).length;
  Items.innerHTML = items;
});
