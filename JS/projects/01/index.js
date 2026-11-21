// counter --------------
const decrease = document.getElementById("decreaseBtn") ;
const reset = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");
const resultShow = document.getElementById("countLabel");
let count = 0;

decrease.onclick = function () {
    count --;
    resultShow.textContent = count;
}
increase.onclick = function () {
    count ++;
    resultShow.textContent = count;
}
reset.onclick = function () {
    count = 0;
    resultShow.textContent = count;
}



// Shopping Bill Calculator --------------
const calculateBtn = document.getElementById("calculate");
const nameShow = document.getElementById("nameShow");
const priceShow = document.getElementById("priceShow");
const quantityShow = document.getElementById("quantityShow");
const totalShow = document.getElementById("totalShow");



calculateBtn.onclick = function () {
    const productName = document.getElementById("productName").value ;
    const productPrice = Number(document.getElementById("productPrice").value) ;
    const quantity = Number(document.getElementById("quantity").value) ; 
    const totalPrice = productPrice * quantity ;
    nameShow.textContent =`Product Name: ${productName}` ;
    priceShow.textContent = `Product Price: ${productPrice}`;
    quantityShow.textContent = `Quantity: ${quantity}`;
    totalShow.textContent = `Total Price: Rs${totalPrice}`;

}