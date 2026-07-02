/**
 * UI Handlers Module
 * Centralizes button click logic to ensure functions are triggered correctly
 */

document.addEventListener('DOMContentLoaded', () => {
    // Admin Button
    const addAdminBtn = document.querySelector('[onclick="saveNewAdminAccount()"]');
    if (addAdminBtn) {
        addAdminBtn.onclick = () => saveNewAdminAccount();
    }

    // Chatbot Button
    const sendBtn = document.querySelector('.fa-paper-plane');
    if (sendBtn) {
        sendBtn.parentElement.onclick = () => sendChatMessage();
    }
});

// Wrapper for your admin saving
function saveNewAdminAccount() {
    console.log("Saving new admin...");
    // Call the function from admin-logic.js
    if (typeof window.renderAdminTable === 'function') {
        renderAdminTable(); 
    }
}
