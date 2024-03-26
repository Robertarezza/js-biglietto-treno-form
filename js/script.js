//test
//alert("ciao")

//bottone
const sendBtnElem = document.getElementById("send-btn"); // object | nulla
console.log(sendBtnElem);

//evento al click del bottone
sendBtnElem.addEventListener("click", function() {
//raccolta dati
const nameInputElem = document.getElementById("username"); // string
console.log(nameInputElem);

const nameValue = nameInputElem.value; // string
console.log(nameValue, typeof nameValue);

const kmInputElem = document.getElementById("user-km"); // object | null
console.log(kmInputElem);

const kmValue = parseInt(kmInputElem.value);  // number
console.log(kmValue, typeof kmValue);

const ageInputElem= document.getElementById("age"); // object | null
console.log((ageInputElem));

const ageValue= parseInt(ageInputElem.value);  // number
console.log(ageValue, typeof ageValue);

//calcolo prezzo biglietto per km
const ticketPrice = kmValue * 0.21; // number
console.log(ticketPrice);

let discount = 0;

if (ageValue < 18) {
  discount = 20;
} else if (ageValue > 65) {
  discount = 40;
}
console.log("discount in %" , discount);

const totalDiscount = (ticketPrice * discount) / 100; // number
console.log("discount in euro", totalDiscount);

const finalTicketPrice = ticketPrice - totalDiscount; // number
console.log("Final Price", finalTicketPrice);

document.getElementById("ticket").innerHTML = finalTicketPrice.toFixed(2);

})
