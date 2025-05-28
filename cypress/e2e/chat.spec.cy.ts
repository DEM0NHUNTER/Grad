describe('Chat Page', () => {
  it('should show chat UI', () => {
    cy.visit('/chat');

    // Check if messages are displayed
    cy.contains('No messages').should('exist').or(cy.get('[data-testid="chat-message"]').should('exist'));

    // Send a new message
    cy.get('input[type="text"]').type('Hello, world!');
    cy.get('button').contains('Send').click();

    // Ensure the message is sent and visible
    cy.get('div').contains('Hello, world!');
  });

  it('should refresh messages every few seconds', () => {
    cy.visit('/chat');
    cy.intercept('GET', '/api/chat', { fixture: 'messages.json' }).as('getMessages');

    // Wait for initial messages
    cy.wait('@getMessages');
    cy.get('div').contains('Previous message text'); // Modify based on your fixture data

    // Ensure periodic refresh works
    cy.wait(3000); // Wait for a few seconds
    cy.wait('@getMessages');
  });
});

