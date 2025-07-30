document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    // Hardcoded credentials for demonstration
    const correctUsername = "user";
    const correctPassword = "pass";

    if (username === correctUsername && password === correctPassword) {
        messageElement.textContent = "Login successful!";
        messageElement.style.color = "green"; // Success message color
    } else {
        messageElement.textContent = "Invalid username or password.";
        messageElement.style.color = "red"; // Error message color
    }
});
