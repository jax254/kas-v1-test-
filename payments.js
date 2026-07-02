async function initiatePayHeroPayment(amount, phone) {
    const response = await fetch('https://your-render-app.onrender.com/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, phone })
    });
    return response.json();
}
