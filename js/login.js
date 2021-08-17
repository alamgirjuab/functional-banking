document.getElementById('login-submit').addEventListener('click', function () {
    // Get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    // Get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    // ID Password matching condition
    if (userEmail == 'user@gmail.com' && userPassword == 'secret') {
        window.location.href = "banking.html";
    }

})