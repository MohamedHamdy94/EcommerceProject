// let data= fetch("./data.js").then(reslut =>{
//   return  reslut.json()
// }).then(reslut =>{ return console.log(reslut)})

let mob = document.getElementById('mob');

let lap = document.getElementById('laptop');

let watches = document.getElementById('watches');
let headphones = document.getElementById('headphones');

let badg = document.getElementById('badg');
let price= document.getElementById('price');

var data;
let fetchData = fetch('../js/data.json')
  .then((reslut) => {
    return reslut.json();

  })
  .then((reslut) => {
    console.log(reslut);
data=reslut;
    return reslut.forEach((element, i) => {

      switch(reslut[i].category){
        case "laptop":
          console.log(reslut[i].name)
    return lap.innerHTML += `<div class="card  my-2 shadow p-3  bg-body rounded">
        <img src=".${reslut[i].image}" class="card-img-top " alt="card-img-top">
        <div class="card-body">
          <h5 class="card-title  ">${reslut[i].name}</h5>
          <div style="display: none;">${reslut[i]._id}</div>
          <p class="card-text fs-lg-3">${reslut[i].description}</p>
          <p class="card-text"><small class="text-muted">${reslut[i].price} LE</small></p>
          <button type="button" onclick="addTocart(${reslut[i]._id})" class="btn btn-success">Buy Now</button>
        </div>
      </div>`
    ;
    case "Mobail":
      reslut[i]
      return mob.innerHTML += `<div class="card  my-2 shadow p-3  bg-body rounded">
          <img src=".${reslut[i].image}" class="card-img-top " alt="card-img-top">
          <div class="card-body">
            <h5 class="card-title  ">${reslut[i].name}</h5>
            <div style="display: none;">${reslut[i]._id}</div>
            <p class="card-text fs-lg-3">${reslut[i].description}</p>
            <p class="card-text"><small class="text-muted">${reslut[i].price} LE</small></p>
            <button type="button" onclick="addTocart(${reslut[i]._id})" class="btn btn-success">Buy Now</button>
          </div>
        </div>`
        
     ;
     case "Watches":
      return watches.innerHTML += `<div class="card  my-2 shadow p-3  bg-body rounded">
      <img src=".${reslut[i].image}" class="card-img-top " alt="card-img-top">
      <div class="card-body">
        <h5 class="card-title  ">${reslut[i].name}</h5>
        <div style="display: none;">${reslut[i]._id}</div>
        <p class="card-text fs-lg-3">${reslut[i].description}</p>
        <p class="card-text"><small class="text-muted">${reslut[i].price} LE</small></p>
        <button type="button" onclick="addTocart(${reslut[i]._id})" class="btn btn-success">Buy Now</button>
      </div>
    </div>`
 ;
 case "Earbuds":
  return headphones.innerHTML += `<div class="card  my-2 shadow p-3  bg-body rounded">
  <img src=".${reslut[i].image}" class="card-img-top " alt="card-img-top">
  <div class="card-body">
    <h5 class="card-title  ">${reslut[i].name}</h5>
    <div style="display: none;">${reslut[i]._id}</div>
    <p class="card-text fs-lg-3">${reslut[i].description}</p>
    <p class="card-text"><small class="text-muted">${reslut[i].price} LE</small></p>
    <button type="button" onclick="addTocart(${reslut[i]._id})" class="btn btn-success">Buy Now</button>
  </div>
</div>`
;
      }
    });
  });








var oldItems = JSON.parse(localStorage.getItem('cartItems')) || [];
function addTocart(i) {
  const Item =data.find((item)=>item._id===i)
  console.log(Item)
const existItem=oldItems.find((item)=>item._id===Item._id)
if (existItem) {
  console.log(existItem)

  existItem.quantity = existItem.quantity + 1;
  existItem.totalPrice = existItem.price * existItem.quantity;
  oldItems.map((x) => (x._id === existItem._id ? Item : x));
  localStorage.setItem('cartItems', JSON.stringify(oldItems));

} else {
  console.log(Item)
  Item.quantity=1
  Item.totalPrice=Item.price*Item.quantity
  oldItems.push(Item);
  localStorage.setItem('cartItems', JSON.stringify(oldItems));
}

var productQuantity=oldItems.reduce((a,b)=>a+b.quantity,0);
var productPrice=oldItems.reduce((a,b)=>a+b.totalPrice,0);

      badg.innerHTML =productQuantity;
      price.innerHTML =productPrice+" $";;

}


$(document).ready(function () {
  
var productQuantity=oldItems.reduce((a,b)=>a+b.quantity,0);
var productPrice=oldItems.reduce((a,b)=>a+b.totalPrice,0);
  badg.innerHTML =productQuantity;
  price.innerHTML =productPrice +" $";
  // $(function () {
  //   $(document).tooltip();
  // });
  // var dlog = $('#cartplace').dialog({
  //   modal: true,
  //   autoOpen: false,
  //   buttons: {
  //     Cancel: function () {
  //       dlog.dialog('close');
  //     },
  //   },
  // });

  // $('#cart').click(function () {
  //   dlog.dialog('open');
  // });
});
