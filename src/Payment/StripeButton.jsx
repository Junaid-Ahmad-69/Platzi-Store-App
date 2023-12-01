import { loadStripe } from '@stripe/stripe-js';

const STRIPE_KEY = process.env.STRIPE_PUBLISH_KEY;
const stripePromise = loadStripe(STRIPE_KEY);

const handleClick = async () => {
    const stripe = await stripePromise;

    // Handle payment using Stripe Elements
    // For instance, open a modal with a payment form
    // Or dynamically render Stripe Elements within your page
};

// Your button component
const CheckoutButton = () => {
    return (
        <button
            onClick={handleClick}
            className="rounded-md outline-none border-none bg-yellow-500 p-2 hover:bg-yellow-600 transition-all duration-300 text-white w-full font-semibold"
        >
            Proceed to Checkout
        </button>
    );
};
export default  CheckoutButton
