// JavaScript to handle account creation, login, and localStorage

// Account creation function
function createAccount() {
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;

    // Check if passwords match
    if (password === confirmPassword) {
        // Save user details to localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let existingUser = users.find(user => user.username === username);

        if (existingUser) {
            alert("Username already exists. Please choose another.");
        } else {
            users.push({ firstName, lastName, username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert("Account created successfully!");
            window.location.href = 'index.html';  // Redirect to login page
        }
    } else {
        alert("Passwords do not match!");
    }
}

// Login function
function login() {
    let username = document.getElementById('login_username').value;
    let password = document.getElementById('login_password').value;

    // Retrieve stored users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));  // Store current user session
        alert("Login successful!");
        window.location.href = 'dashboard.html';  // Redirect to dashboard
    } else {
        alert("Invalid username or password");
    }
}

// Load profile data
function loadProfile() {
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        document.getElementById('profile_name').innerText = loggedInUser.firstName + ' ' + loggedInUser.lastName;
        document.getElementById('profile_username').innerText = loggedInUser.username;
    } else {
        alert("No user is logged in.");
        window.location.href = 'index.html';  // Redirect to login if not logged in
    }
}

// Logout function
function logout() {
    localStorage.removeItem('loggedInUser');
    alert("Logged out successfully!");
    window.location.href = 'index.html';  // Redirect to login page
}
