describe('Dashboard Page', () => {
  it('should load and display metrics', () => {
    cy.visit('/dashboard');

    // Check if metrics data is displayed
    cy.contains('Total Users');
    cy.contains('Total Chats');
  });

  it('should show error if backend fails to load data', () => {
    // Simulate an API failure
    cy.intercept('GET', '/api/admin/metrics', {
      statusCode: 500,
      body: { message: 'Internal Server Error' },
    }).as('getMetrics');

    cy.visit('/dashboard');
    cy.wait('@getMetrics');

    // Check for error message
    cy.contains('Error loading metrics');
  });
});
