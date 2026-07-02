/**
 * Prudence AI Controller
 * Manages chatbot UI interactions and AI professor persona logic
 */

function toggleChat() {
    const chatWidget = document.getElementById('chatWidget');
    if (chatWidget) chatWidget.classList.toggle('open');
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');

    if (!input || !chatBody || input.value.trim() === '') return;

    const userText = input.value.trim();
    
    // Add user message to UI
    const userDiv = document.createElement('div');
    userDiv.className = 'message user-message';
    userDiv.textContent = userText;
    chatBody.appendChild(userDiv);

    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulate Prudence "Thinking" response
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot-message';
        botDiv.textContent = "Prudence is parsing your inquiry regarding your current academic course unit.";
        chatBody.appendChild(botDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 800);
}
