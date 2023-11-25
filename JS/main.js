function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    console.log(username)

    if (username === "boribou.prak" && password === "2007") {
        console.error('here')
        errorMessage.style.color = "green";
        errorMessage.textContent = "Login Successful!"; 

        setTimeout(function () {
            window.location.href = "html/aboutme.html";
          }, 2000);
    } else {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Invalid username or password. Please try again.";
        }
}

