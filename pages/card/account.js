const cardType =  document.getElementById("card-type");
const cardAccount = document.getElementById("card-account");
const cardNumber = document.getElementById("card-number");
const cardForm = document.getElementById("card-form");

// for buttons
const cardSumbit = document.getElementById("crd-submit");
const cardClear = document.getElementById("card-clear");

cardClear.addEventListener("click", function(e) { cardForm.reset() })