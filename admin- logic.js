/**
 * Admin Logic Module
 * Handles dashboard data and administrative table management
 */

// Initial Administrator database instance
let adminTeam = [
    { name: "Jesse Kasamba", email: "kasambajesse@cloudshell", role: "Super Admin", bounds: "Full Root System Access" },
    { name: "Alex Kiptoo", email: "kiptoo@alupestudent.ac.ke", role: "Editor - Limited", bounds: "Course Material Modifications" },
    { name: "Mary Mwangi", email: "mwangi.m@alupestudent.ac.ke", role: "Moderator - Limited", bounds: "Chatbot Logs & User Flags" }
];

function renderAdminTable() {
    const tbody = document.getElementById('adminTableBody');
    const countDisplay = document.getElementById('adminCount');
    if (!tbody) return;

    tbody.innerHTML = '';
    adminTeam.forEach((member, index) => {
        const row = document.createElement('tr');
        const badgeClass = member.role.includes('Super') ? 'badge-root' : 'badge-limited';

        row.innerHTML = `
            <td><strong>${member.name}</strong></td>
            <td>${member.email}</td>
            <td><span class="badge ${badgeClass}">${member.role}</span></td>
            <td class="text-muted" style="font-size:0.85rem;">${member.bounds}</td>
            <td>
                ${index === 0 ? '<i class="fa-solid fa-lock text-muted"></i>' : `<i class="fa-solid fa-user-minus action-icon" onclick="removeAdminAccount(${index})"></i>`}
            </td>
        `;
        tbody.appendChild(row);
    });

    if (countDisplay) countDisplay.textContent = adminTeam.length;
}

function removeAdminAccount(index) {
    if (confirm(`Are you certain you want to revoke system control keys for ${adminTeam[index].name}?`)) {
        adminTeam.splice(index, 1);
        renderAdminTable();
    }
}
