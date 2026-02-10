const BASE_URI = ``

export async function addAccount(cardType, cardPaymentNetwork, cardNumber) {
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