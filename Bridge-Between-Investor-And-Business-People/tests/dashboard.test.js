// This file contains test cases for the dashboard functionalities, verifying that users can post, edit, and delete their respective content based on their roles. 

describe('Dashboard Functionality Tests', () => {
    let user;

    beforeEach(() => {
        // Setup code to initialize Firebase and create a user
        user = createTestUser(); // Function to create a test user
    });

    afterEach(() => {
        // Cleanup code to delete the test user and any test data
        deleteTestUser(user); // Function to delete the test user
    });

    test('Investor can post an investment proposal', async () => {
        const proposal = { title: 'Investment in Tech Startup', amount: 50000 };
        const response = await postInvestmentProposal(user, proposal); // Function to post proposal
        expect(response.success).toBe(true);
        expect(response.data.title).toBe(proposal.title);
    });

    test('Business Person can post a business idea', async () => {
        const idea = { title: 'Innovative App', description: 'An app that solves problems' };
        const response = await postBusinessIdea(user, idea); // Function to post business idea
        expect(response.success).toBe(true);
        expect(response.data.title).toBe(idea.title);
    });

    test('User can edit their posted content', async () => {
        const updatedIdea = { title: 'Updated Innovative App', description: 'Updated description' };
        const response = await editBusinessIdea(user, updatedIdea); // Function to edit business idea
        expect(response.success).toBe(true);
        expect(response.data.title).toBe(updatedIdea.title);
    });

    test('User can delete their posted content', async () => {
        const response = await deleteBusinessIdea(user); // Function to delete business idea
        expect(response.success).toBe(true);
    });

    test('User cannot access another user\'s content', async () => {
        const response = await accessOtherUserContent(user); // Function to access another user's content
        expect(response.success).toBe(false);
        expect(response.error).toBe('Access denied');
    });
});