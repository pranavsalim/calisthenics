// pay.js

// Function to handle the payment success/failure
function handlePaymentResponse(response) {
    if (response.razorpay_payment_id) {
        // Payment was successful
        // Redirect to the next page (e.g., success page)
        window.location.href = 'build.html'; // Replace with your actual next page URL
    } else {
        // Payment failed
        // Redirect to a failure page
        window.location.href = '/failure_page.html'; // Replace with your actual failure page URL
    }
}

// This function is triggered when the "Pay" button is clicked
function initiatePayment() {
    var options = {
        "key": "YOUR_RAZORPAY_KEY", // Replace with your Razorpay public key
        "amount": 6100, // Amount in paise (61 INR = 6100 paise)
        "currency": "INR",
        "name": "Calisthenics Subscription",
        "description": "Unlock Premium Access",
        "image": "https://your-website-logo.com/logo.png",
        "order_id": "your_order_id_here", // Optional: You can dynamically generate order ID from your backend
        "handler": function(response) {
            // Handle the response after payment
            handlePaymentResponse(response);
        },
        "prefill": {
            "name": "", // Optional: Pre-fill customer details
            "email": "",
            "contact": ""
        },
        "theme": {
            "color": "#F37254" // Optional: Change the color of the payment widget
        }
    };

    var rzp1 = new Razorpay(options);
    rzp1.open(); // Open the Razorpay checkout window
}

// Attach the function to the "Pay Now" button click event
document.getElementById('pay-button').addEventListener('click', initiatePayment);
