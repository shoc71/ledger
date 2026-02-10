// import { addAccount } from "./account.api";

// input collects
const cardType =  document.getElementById("card-type");
const cardPaymentNetwork = document.getElementById("card-pay");
const cardNumber = document.getElementById("card-number");
const cardForm = document.getElementById("card-form");

// for buttons
const cardSumbit = document.getElementById("card-submit");
const cardClear = document.getElementById("card-clear");

const numberLimit = 4

// notifications
var toastEl = document.getElementById("liveToast")

var toast = new bootstrap.Toast(toastEl, {
    autohide: true,
    delay: 3000
});

const BASE_URI = ``

async function addAccount(cardType, cardPaymentNetwork, cardNumber) {
    try {
        const res = await fetch(`${BASE_URI}/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cardType,
                cardPaymentNetwork,
                cardNumber
            })
        });

        return await res.json();
    } catch (error) {
        return {
            success: false,
            error: "Error Creating Account"
        }
    }
}

// making sure card number is valid 4-digits
cardNumber.addEventListener("input", () => {
    cardNumberListener = cardNumber.value.length;

    if (cardNumberListener > numberLimit) {
        cardNumber.value = cardNumber.value.substring(0, numberLimit);
    }
})

cardClear.addEventListener("click",  cardForm.reset() );

cardSumbit.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (cardPaymentNetwork.value == "filler" || cardType.value == "filler") {
        alert("something is not right");
        return;
    }
    alert("clicked")

    try {
        await addAccount(cardType.value, cardPaymentNetwork.value, cardNumber.value);
        e.target.reset();
        toast.show();
    } catch (error) {
        console.error(error)
        alert("add Account API failed: ", error)
    }
});