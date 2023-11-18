function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message").value;
}

if (username == "prak.chanboribou" && password == "boribou@18072007") {
    errorMessage.style.color = "green";
    errorMessage.textContent = "Login Successful!";
} else {
    errorMessage.style.color = "red";
    errorMessage.textContent = "Invalid username or password. Please try again.";
}