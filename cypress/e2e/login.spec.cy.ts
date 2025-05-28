describe('Login Page', () => {
  it('should successfully log in with valid credentials', () => {
    // Intercept the login API request before visiting the page
    cy.intercept('POST', '/api/auth/login', {
      statusCode: 200,
      body: { user: { id: '1', email: 'admin@example.com', name: 'Admin' } }
    }).as('loginRequest');

    // Visit the login page
    cy.visit('/login');

    // Type valid credentials
    cy.get('input[type="email"]').type('admin@example.com');
    cy.get('input[type="password"]').type('password123');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Wait for the login request and ensure it's called
    cy.wait('@loginRequest');

    // Check if the URL contains '/dashboard'
    cy.url().should('include', '/dashboard');
    cy.contains('Awladna'); // Check for text on the dashboard page
  });

  it('should show error with invalid credentials', () => {
    // Intercept the login API request with a 401 error response for invalid credentials
    cy.intercept('POST', '/api/auth/login', {
      statusCode: 401,
      body: { message: 'Invalid credentials' }
    }).as('loginRequest');

    cy.visit('/login');
    cy.get('input[type="email"]').type('invalid@example.com');
    cy.get('input[type="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    // Wait for the failed login request and check for error message
    cy.wait('@loginRequest');
    cy.contains('Invalid credentials');
  });
});
