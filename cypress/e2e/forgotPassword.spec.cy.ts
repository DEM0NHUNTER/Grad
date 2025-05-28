describe('Forgot Password Page', () => {
  it('should send a reset link for existing email', () => {
    cy.visit('/forgot-password');
    cy.get('input[type="email"]').type('existinguser@example.com'); // Use a real test email
    cy.get('button[type="submit"]').click();

    cy.contains('If that email exists, a reset link has been sent.');
  });

  it('should show error for non-existent email', () => {
    cy.visit('/forgot-password');
    cy.get('input[type="email"]').type('nonexistentuser@example.com');
    cy.get('button[type="submit"]').click();

    cy.contains('No account found with that email.');
  });
});
