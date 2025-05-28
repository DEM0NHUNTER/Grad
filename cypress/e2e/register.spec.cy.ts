describe('Register Page', () => {
  it('should successfully register a new user', () => {
    cy.visit('/register');
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    // Check for redirection or success message (adjust as needed)
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome to Awladna');
  });

  it('should show error on duplicate registration', () => {
    cy.visit('/register');
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('existinguser@example.com'); // Replace with an already registered email
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    // Check for error message (modify as needed)
    cy.contains('Email already exists');
  });
});
