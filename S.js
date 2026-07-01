/**
 * Core Platform Scripting Engine
 * Controls: Prudence Interaction, Administrative Role Hierarchies, UI Modals
 */

// ==========================================
// 1. CHATBOT WIDGET CONTROLLER (PRUDENCE AI)
// ==========================================
function toggleChat() {
    const chatWidget = document.getElementById('chatWidget');
    if (chatWidget) {
        chatWidget.classList.toggle('open');
    }
}

function handleChatKey(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    
    if (!input || !chatBody || input.value.trim() === '') return;

    const userText = input.value.trim();

    // Render User Statement to Layout Grid
    const userDiv = document.createElement('div');
    userDiv.className = 'message user-message';
    userDiv.textContent = userText;
    chatBody.appendChild(userDiv);

    // Clear input bar
    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulate Natural AI Cognitive Delay Processing
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot-message';
        botDiv.textContent = generatePrudenceResponse(userText);
        chatBody.appendChild(botDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 650);
}

function generatePrudenceResponse(message) {
    const msg = message.toLowerCase();
    if (msg.includes('hello') || msg.includes('hi')) {
        return "Greetings! I'm ready to evaluate tracking units with you. What are we studying today?";
    } else if (msg.includes('admin') || msg.includes('panel')) {
        return "The administrative console can be structured directly via the link in your top navigation menu.";
    } else if (msg.includes('literature') || msg.includes('english')) {
        return "I can trace language development parameters, critical literary essays, and text analytics structures.";
    }
    return "Understood. I am parsing that query parameter relative to your academic track databases.";
}

// ==========================================
// 2. MULTIPLE ADMIN MANAGEMENT PANEL ENGINE
// ==========================================

// Initial Administrator database instance configuration
let adminTeam = [
    { name: "Jesse Kasamba", email: "kasambajesse@cloudshell", role: "Super Admin", bounds: "Full Root System Access" },
    { name: "Alex Kiptoo", email: "kiptoo@alupestudent.ac.ke", role: "Editor - Limited", bounds: "Course Material Modifications" },
    { name: "Mary Mwangi", email: "mwangi.m@alupestudent.ac.ke", role: "Moderator - Limited", bounds: "Chatbot Logs & User Flags" }
];

// Initialize view metrics dynamically if on the admin workspace
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('adminTableBody')) {
        renderAdminTable();
    }
    
    // Simulate structural presentation hook for Google Authentication Button API
    const googleBtnPlaceholder = document.getElementById('google-signin-btn');
    if (googleBtnPlaceholder) {
        googleBtnPlaceholder.innerHTML = `<button class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size:0.85rem;" onclick="alert('Google Sign-In sequence initiated.')"><i class="fa-brands fa-google"></i> Sign In</button>`;
    }
});

function renderAdminTable() {
    const tbody = document.getElementById('adminTableBody');
    const countDisplay = document.getElementById('adminCount');
    if (!tbody) return;

    tbody.innerHTML = '';
    adminTeam.forEach((member, index) => {
        const row = document.createElement('tr');
        
        // Define clean color badges depending on access limit tiers
        const badgeClass = member.role.includes('Super') ? 'badge-root' : 'badge-limited';
        
        row.innerHTML = `
            <td><strong>${member.name}</strong></td>
            <td>${member.email}</td>
            <td><span class="badge ${badgeClass}">${member.role}</span></td>
            <td class="text-muted" style="font-size:0.85rem;">${member.bounds}</td>
            <td>
                ${index === 0 ? '<i class="fa-solid fa-lock text-muted" title="Root Access Unmodifiable"></i>' : `<i class="fa-solid fa-user-minus action-icon" onclick="removeAdminAccount(${index})" title="Revoke Authorizations"></i>`}
            </td>
        `;
        tbody.appendChild(row);
    });

    if (countDisplay) {
        countDisplay.textContent = adminTeam.length;
    }
}

function openAddAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) modal.classList.add('open');
}

function closeAddAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) modal.classList.remove('open');
}

function saveNewAdminAccount() {
    const name = document.getElementById('newAdminName').value.trim();
    const email = document.getElementById('newAdminEmail').value.trim();
    const role = document.getElementById('newAdminRole').value;

    if (!name || !email) {
        alert('Please populate both the Admin Identity and email configuration keys.');
        return;
    }

    // Determine specific operational boundaries based on role choice
    let bounds = "Dynamic Context Boundary";
    if (role === "Super Admin") bounds = "Full Root System Access";
    if (role === "Editor - Limited") bounds = "Course Material Modifications";
    if (role === "Moderator - Limited") bounds = "Chatbot Logs & User Flags";

    // Inject account data into active system instance
    adminTeam.push({ name, email, role, bounds });
    
    // Refresh table and reset state
    renderAdminTable();
    closeAddAdminModal();
    
    // Clear Input Values
    document.getElementById('newAdminName').value = '';
    document.getElementById('newAdminEmail').value = '';
}

function removeAdminAccount(index) {
    if (confirm(`Are you certain you want to revoke system control keys for ${adminTeam[index].name}?`)) {
        adminTeam.splice(index, 1);
        renderAdminTable();
    }
}
