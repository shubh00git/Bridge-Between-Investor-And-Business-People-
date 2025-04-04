# Bridge Between Investor And Business People

## Overview
"Bridge Between Investor And Business People" is a web application designed to connect investors with business people, facilitating the exchange of business ideas, investment proposals, loan offers, and guidance. The application features role-specific dashboards for Investors, Business People, Advisors, and Bankers, ensuring a tailored experience for each user type.

## Features
- **User Authentication**: Secure sign-up, login, and logout functionalities using Firebase Authentication.
- **Role-Specific Dashboards**:
  - **Investor Dashboard**: Browse business ideas and post investment proposals.
  - **Business Dashboard**: Post, edit, and delete business ideas and funding needs.
  - **Admin Dashboard**: Manage loan offers and provide guidance to users.
- **Firebase Integration**: Utilizes Firebase for real-time database management and user authentication.
- **Responsive Design**: Ensures a professional and user-friendly interface across all devices.

## Project Structure
```
Bridge-Between-Investor-And-Business-People
├── public
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   ├── app.js
│   │   ├── auth.js
│   │   ├── dashboard.js
│   │   └── firebase-config.js
│   ├── index.html
│   ├── investor-dashboard.html
│   ├── business-dashboard.html
│   └── admin-dashboard.html
├── firebase
│   ├── firestore.rules
│   └── firebase.json
├── tests
│   ├── auth.test.js
│   ├── dashboard.test.js
│   └── error-handling.test.js
├── .gitignore
├── README.md
└── package.json
```

## Setup Instructions
1. **Clone the Repository**: 
   ```
   git clone https://github.com/yourusername/Bridge-Between-Investor-And-Business-People.git
   cd Bridge-Between-Investor-And-Business-People
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Firebase Configuration**: 
   - Create a Firebase project and configure Firestore and Authentication.
   - Update the `firebase-config.js` file with your Firebase project credentials.

4. **Run the Application**: 
   - Open `public/index.html` in your web browser to access the application.

## Testing
- Run the test cases using your preferred testing framework to ensure all functionalities work as expected.

## Contribution
Feel free to fork the repository and submit pull requests for any improvements or bug fixes.

## License
This project is licensed under the MIT License.