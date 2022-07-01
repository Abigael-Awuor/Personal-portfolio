let quotation = confirm("client purchase");
if (quotation == true) {
  console.log("Sign the contract");
}
else {
  console.log("THE END");
}
let stock = confirm("available");
if (stock == true) {
  console.log("deliver after receive the payment");
}
else {
  console.log("arrange the deposit");
}
if (stock == false) {
  console.log("prepare the production");
}
else {
  console.log("deliver the goods");
}
let deliverGoods = confirm("laptops");
if (deliverGoods == true) {
  console.log("receipt of the goods");
}
else {
  console.log("replacement");
}
/*a flow chart for purchasing an Item*/
console.log("After sales Services");
