//test
//alert("ciao")

//bottone genera
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
console.log(ageInputElem);

const ageValue= parseInt(ageInputElem.value);  // number
console.log(ageValue, typeof ageValue);

if (isNaN(kmValue) === false && isNaN(ageValue) === false && kmValue > 0 && ageValue > 0) {

//calcolo prezzo biglietto per km
const ticketPrice = kmValue * 0.21; // number
console.log(ticketPrice);

let discount = 0;

if (ageValue < 18) {
  discount = 20;
  document.getElementById("ticket_price").innerHTML = "Biglietto scontato 20%";
} else if (ageValue > 65) {
  discount = 40;
  document.getElementById("ticket_price").innerHTML = "Biglietto scontato 40%";
}else {
    discount = 0;
    document.getElementById("ticket_price").innerHTML = "Biglietto standard";
}
console.log("discount in %" , discount);

const totalDiscount = (ticketPrice * discount) / 100; // number
console.log("discount in euro", totalDiscount);

const finalTicketPrice = ticketPrice - totalDiscount; // number
console.log("Final Price", finalTicketPrice);

//genera numero carrozza
const number=Math.floor(Math.random() * 11); //number
console.log(number, typeof number);

//stampa
document.getElementById("carriage").innerHTML = number;
document.getElementById("name").innerHTML = nameValue;
document.getElementById("ticket").innerHTML = finalTicketPrice.toFixed(2);
} else{
    alert("dati errati")
}

})


//bottone annulla
const BtnElem = document.getElementById("btn"); // object | nulla
console.log(BtnElem);

BtnElem.addEventListener("click", function() {
    window.location.reload()
})