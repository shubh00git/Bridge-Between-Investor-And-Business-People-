// This file handles user authentication, including sign-up, login, and logout functionalities using Firebase Authentication.

const auth = firebase.auth();

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('User signed up:', user);
            // Redirect to appropriate dashboard based on user role
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error during sign up:', errorCode, errorMessage);
            // Display error message to user
        });
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('User logged in:', user);
            // Redirect to appropriate dashboard based on user role
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error during login:', errorCode, errorMessage);
            // Display error message to user
        });
});

document.getElementById('logout-button').addEventListener('click', function() {
    auth.signOut().then(() => {
        console.log('User logged out');
        // Redirect to landing page or show login form
    }).catch((error) => {
        console.error('Error during logout:', error);
        // Display error message to user
    });
});