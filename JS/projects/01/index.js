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




// Employee Salary Calculator
const salaryCal = document.getElementById("salaryCal");
const showName01 = document.getElementById("showName01");
const showBasicSalary = document.getElementById("showBasicSalary");
const showallowence = document.getElementById("showallowence");
const showBonus = document.getElementById("showBonus");
const showTotalSalary = document.getElementById("showTotalSalary");

salaryCal.onclick = function () {
    const employeeName = document.getElementById("employeeName").value ;
    const basicSalary = Number(document.getElementById("basicSalary").value) ;
    const allowence = Number(document.getElementById("allowence").value) ;
    const bonus = Number(document.getElementById("bonus").value) ;
    const totalSalary = basicSalary + allowence + bonus ;

    showName01.textContent = `Employee Name: ${employeeName}` ;
    showBasicSalary.textContent =`Basic Salary: ${basicSalary}`;
    showallowence.textContent =`Allowance: ${allowence}`;
    showBonus.textContent =`Bonus: ${bonus}`;
    showTotalSalary.textContent =`Total Salary: ${totalSalary}` ;


}