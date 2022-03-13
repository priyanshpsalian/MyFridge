if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

console.log("jj");
var aData = [];
var yy = document.getElementsByClassName("shop-item-title");
// yy.innerText = function ready() {
function ready() {
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}
function list(item_name, item_price, item_expiry_date, item_quantity) {
  this.item_name = item_name;
  this.item_price = item_price;
  this.item_expiry_date = item_expiry_date;
  this.item_quantity = item_quantity;
}
async function purchaseClicked() {
  alert("Changes have been made");

  // while (cartItems.hasChildNodes()) {
  //   cartItems.removeChild(cartItems.firstChild);
  // }
  //   var car = document.getElementsByClassName("cart-price")[0].value;
  //   console.log(car);
  //   var i = 0;

  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var titleElement = cartRow.getElementsByClassName("cart-item-title")[0];

    var priceElement = cartRow.getElementsByClassName("cart-price")[0];

    var dateElement = cartRow.getElementsByClassName("cart-date")[0];
    console.log(dateElement);
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];

    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    var title = titleElement.innerText;
    var date = dateElement.innerText;
    aData.push(new list(title, price, date, quantity));
  }
  // const array = document.getElementById("array");
  // array.innerText = aData;
  console.log(aData);
  // const data = { username: "example" };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aData),
  };
  const rew = await fetch("/edit_items", options);
  // const data = await rew.json();

  // .then((response) => {
  //   console.log(response);
  // })

  // .then((data) => {
  //   console.log("Success:", data);
  // })
  // .catch((error) => {
  //   console.error("Error:", error);
  // });
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].value;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].value;
  var date = shopItem.getElementsByClassName("shop-item-date")[0].value;
  date = date.split("-").reverse().join("-");
  console.log(date);

  //   var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  //   addItemToCart(title, price, imageSrc);
  addItemToCart(title, price, date);

  updateCartTotal();
}

function addItemToCart(title, price, date) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  // for (var i = 0; i < cartItemNames.length; i++) {
  //   if (cartItemNames[i].innerText == title) {
  //     alert("This item is already added to the cart");
  //     return;
  //   }
  // }
  var cartRowContents = `
          <div class="cart-item cart-column">
              
              <span class="cart-item-title">${title}</span>
          </div>
          <span class="cart-price cart-column">${price}</span>
          <span class="cart-date cart-column">${date}</span>
          <div class="cart-quantity cart-column">
              <input class="cart-quantity-input" type="number" value="1">
              <button class="btn btn-danger" type="button">REMOVE</button>
          </div>`;
  // <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
