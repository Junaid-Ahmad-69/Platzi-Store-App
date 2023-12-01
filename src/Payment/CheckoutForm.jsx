import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = ({ onPayment, isProcessing }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Use Stripe.js to create a payment method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            // Handle payment method creation error
            setError(error.message);
        } else {
            // Pass payment method details to parent component for further processing
            onPayment({ payment_method_id: paymentMethod.id });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit" disabled={isProcessing}>
                {isProcessing ? 'Processing...' : 'Pay'}
            </button>
        </form>
    );
};

export default CheckoutForm;
