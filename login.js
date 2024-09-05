

function login() {
    // Capture the input values
    const accountNumber = document.getElementById('AccountNumber').value
    const password = document.getElementById('password').value;

    // Retrieve the stored data from local storage
    const storedUserData = localStorage.getItem('userData');
    
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        // Check if the account number and password match
        if (userData.accountNumber === accountNumber && userData.password === password) {
            // Redirect to the deposit and withdrawal page
            window.location="./main.html"
            alert('Login successful')
        } else {
            alert('Invalid account number or password');
        }
    } else {
        alert('No registered user found');
    }
}