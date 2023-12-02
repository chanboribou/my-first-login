function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "boribou.prak" && password === "2007") {
        errorMessage.style.color = "green";
        errorMessage.textContent = "Login Successful!"; 

        setTimeout(function () {
            window.location.href = "/about-me.html";
          }, 2000);
    } else {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Invalid username or password. Please try again.";
        }
}

