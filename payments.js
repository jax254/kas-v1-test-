// payments.js - Frontend payment trigger
async function initiatePayHeroPayment(amount, phone) {
    // This connects to the Render server we will build in a future step
    const response = await fetch('https://your-render-app.onrender.com/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, phone })
    });
    return response.json();
}
