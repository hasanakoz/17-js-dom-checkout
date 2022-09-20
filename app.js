const productArea = document.querySelector(".products");
let bagPrice = document.getElementById("bag-price");
let shoePrice = document.getElementById("shoe-price");
let clockPrice = document.getElementById("clock-price");

let bagQuantity = document.querySelector(".bag-costs .quanty");

let shoeQuantity = document.querySelector(".shoe-costs .quanty");

let clockQuantity = document.querySelector(".clock-costs .quanty");

let subTotal = document.querySelector("#subtotal").textContent;

let tax = document.querySelector("#tax");
let shipping = document.querySelector("#shipping");
let total = document.querySelector("#total");
let removeBtn = document.querySelectorAll(".remove");
console.log(removeBtn);

let products = JSON.parse(localStorage.getItem("PRODUCTS"));

productArea.addEventListener("click", (e) => {
    const newProduct = {
        price :
    }
  if (e.target.classList.contains("fa-plus")) {
    e.target.previousSibling.textContent += 2;
  }
});
