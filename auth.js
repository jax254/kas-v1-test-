// auth.js - Firebase Authentication logic
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("User is signed in:", user.email);
    } else {
        console.log("No user signed in.");
        // If they aren't logged in, redirect them to home
        if (window.location.pathname.includes("admin.html")) {
            window.location.href = "index.html";
        }
    }
});
