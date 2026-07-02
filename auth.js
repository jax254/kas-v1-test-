// Check if user is logged in, if not, redirect to index
firebase.auth().onAuthStateChanged((user) => {
    if (!user && window.location.pathname.includes("admin.html")) {
        window.location.href = "index.html";
    }
});
