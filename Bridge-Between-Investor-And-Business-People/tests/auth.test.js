// This file contains test cases for the authentication functionalities, ensuring that user sign-up, login, and logout processes work as expected.

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseConfig } from '../public/js/firebase-config';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

describe('Authentication Tests', () => {
    const testEmail = 'testuser@example.com';
    const testPassword = 'TestPassword123';

    afterEach(async () => {
        // Clean up: sign out after each test
        await signOut(auth);
    });

    test('User can sign up', async () => {
        await createUserWithEmailAndPassword(auth, testEmail, testPassword);
        const user = auth.currentUser;
        expect(user).not.toBeNull();
        expect(user.email).toBe(testEmail);
    });

    test('User can log in', async () => {
        await createUserWithEmailAndPassword(auth, testEmail, testPassword);
        await signInWithEmailAndPassword(auth, testEmail, testPassword);
        const user = auth.currentUser;
        expect(user).not.toBeNull();
        expect(user.email).toBe(testEmail);
    });

    test('User can log out', async () => {
        await createUserWithEmailAndPassword(auth, testEmail, testPassword);
        await signOut(auth);
        const user = auth.currentUser;
        expect(user).toBeNull();
    });

    test('Sign up with existing email should fail', async () => {
        await createUserWithEmailAndPassword(auth, testEmail, testPassword);
        await expect(createUserWithEmailAndPassword(auth, testEmail, testPassword)).rejects.toThrow();
    });

    test('Login with incorrect password should fail', async () => {
        await createUserWithEmailAndPassword(auth, testEmail, testPassword);
        await expect(signInWithEmailAndPassword(auth, testEmail, 'WrongPassword')).rejects.toThrow();
    });
});