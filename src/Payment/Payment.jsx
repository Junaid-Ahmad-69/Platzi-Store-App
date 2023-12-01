import {useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {useStore} from "../Context/Context";
import CheckoutForm from './CheckoutForm';
import * as stripe from "stripe";

const STRIPE_KEY = process.env.STRIPE_PUBLISH_KEY

const stripePromise = loadStripe(STRIPE_KEY);

const CheckoutPage = () => {
    const {item} = useStore()
    const [isPaymentProcessing, setPaymentProcessing] = useState(false);
    const handlePayment = async (paymentDetails) => {
        try {
            setPaymentProcessing(true);

            // Use Stripe APIs to create a PaymentIntent or PaymentMethod
            // This involves sending the payment details to your backend server
            const response = await fetch('/your-server-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentDetails),
            });

            const paymentIntent = await response.json();

            // Once you have the PaymentIntent, use stripe.confirmCardPayment or stripe.handleCardPayment
            const {error} = await stripe.confirmCardPayment(paymentIntent.client_secret, {
                payment_method: paymentDetails.payment_method_id,
            });

            if (error) {
                // Handle payment error
                console.log(error.message)
            } else {
                // Payment successful, complete the purchase process
                console.log("Payment successful")
                // Clear cart, show success message, etc.
            }
        } catch (error) {
            console.log(error.message)
            // Handle error
        } finally {
            setPaymentProcessing(false);
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            {item.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
            <Elements stripe={stripePromise}>
                <CheckoutForm onPayment={handlePayment} isProcessing={isPaymentProcessing}/>
            </Elements>
        </div>
    );
};

export default CheckoutPage;

