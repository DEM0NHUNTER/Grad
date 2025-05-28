describe('Reset Password Page', () => {
  it('should reset the password with a valid token', () => {
    const token = 'valid-token'; // Use a real token for testing
    cy.visit(`/reset-password?token=${token}`);
    cy.get('input[type="password"]').type('newpassword123');
    cy.get('button[type="submit"]').click();

    cy.contains('Password reset successful! Please login.');
  });

  it('should show an error for invalid token', () => {
    cy.visit('/reset-password?token=invalid-token');
    cy.get('input[type="password"]').type('newpassword123');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid or expired token');
  });
});
