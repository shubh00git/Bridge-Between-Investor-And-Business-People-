// This file initializes the application, handles routing between different dashboards, and manages overall application logic.

document.addEventListener('DOMContentLoaded', function() {
    const userRole = localStorage.getItem('userRole'); // Assuming user role is stored in local storage after login

    // Function to route users to their respective dashboards
    function routeUser() {
        if (userRole === 'Investor') {
            window.location.href = 'investor-dashboard.html';
        } else if (userRole === 'Business') {
            window.location.href = 'business-dashboard.html';
        } else if (userRole === 'Admin') {
            window.location.href = 'admin-dashboard.html';
        } else {
            console.error('User role not recognized. Redirecting to login page.');
            window.location.href = 'index.html'; // Redirect to login if role is not recognized
        }
    }

    // Call the routing function
    routeUser();
});