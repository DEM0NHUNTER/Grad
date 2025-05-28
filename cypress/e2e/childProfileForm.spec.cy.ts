describe('Child Profile Form', () => {
  it('should create a new child profile', () => {
    cy.visit('/profiles/new');
    cy.get('input[name="name"]').type('Child 1');
    cy.get('input[name="age"]').type('5');
    cy.get('button[type="submit"]').click();

    // Check for successful form submission and redirection
    cy.url().should('include', '/profiles');
    cy.contains('Child 1');
  });

  it('should update an existing child profile', () => {
    // Assuming you have a child profile to edit
    cy.visit('/profiles/123'); // Modify with an actual ID
    cy.get('input[name="name"]').clear().type('Updated Child Name');
    cy.get('input[name="age"]').clear().type('6');
    cy.get('button[type="submit"]').click();

    // Check for successful form submission and updated profile
    cy.url().should('include', '/profiles');
    cy.contains('Updated Child Name');
  });
});
