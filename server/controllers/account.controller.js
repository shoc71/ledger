import mongoose from "mongoose";


export async function createAccount(req, res) {
    try {
        const {cardType, cardPaymentNetwork, cardNumber} = req.body;
    } catch (error) {
        console.error("Server Error Create Account: ", error.message);
        return res.status(500).json({ success: false, message: "Server Error Create Account: ", error });
    }
}