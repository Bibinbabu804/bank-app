function register() {
    // Capture the input values
    const name = document.getElementById('name').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const password = document.getElementById('password').value;

    if (name && accountNumber && password) {
   
        const userData = {
            name: name,
            accountNumber: accountNumber,
            password: password
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        console.log(userData);
        
        // Redirect to the login page
        window.location= './login.html';
        alert('Registeration Successful')
    } else {
        alert('Please fill all the fields');
    }
}