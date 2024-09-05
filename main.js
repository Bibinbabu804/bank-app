// Function to get user data from local storage
function getUserData() {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
}

// Function to update user data in local storage
function updateUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
}

// Function to update the balance display
function updateBalanceDisplay() {
    const userData = getUserData();
    if (userData) {
        document.getElementById('balance').textContent = userData.balance;
    }
}

// Function to display messages
function displayMessage(message) {
    document.getElementById('message').textContent = message;
}

// Function to handle deposit
function deposit() {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    const depositPassword = document.getElementById('depositPassword').value;
    const userData = getUserData();

    console.log('Deposit Amount:', depositAmount);
    console.log('Deposit Password:', depositPassword);
    console.log('User Data:', userData);

    if (userData && userData.password === depositPassword) {
        if (depositAmount > 0) {
            userData.balance += depositAmount;
            updateUserData(userData);
            updateBalanceDisplay();
            displayMessage('Deposit successful!');
        } else {
            displayMessage('Please enter a valid amount.');
        }
    } else {
        displayMessage('Invalid password.');
    }
}

// Function to handle withdrawal
function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    const withdrawPassword = document.getElementById('withdrawPassword').value;
    const userData = getUserData();

    console.log('Withdraw Amount:', withdrawAmount);
    console.log('Withdraw Password:', withdrawPassword);
    console.log('User Data:', userData);

    if (userData && userData.password === withdrawPassword) {
        if (withdrawAmount > 0 && withdrawAmount <= userData.balance) {
            userData.balance -= withdrawAmount;
            updateUserData(userData);
            updateBalanceDisplay();
            displayMessage('Withdrawal successful!');
        } else {
            displayMessage('Invalid amount or insufficient balance.');
        }
    } else {
        displayMessage('Invalid password.');
    }
}

// Initialize the balance display on page load
document.addEventListener('DOMContentLoaded', () => {
    const userData = getUserData();
    if (userData) {
        if (userData.balance === undefined) {
            userData.balance = 0;
            updateUserData(userData);
        }
        updateBalanceDisplay();
    } else {
        displayMessage('No user data found.');
    }
});
