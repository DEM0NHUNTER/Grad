describe('Child Profile List', () => {
  it('should load and display child profiles', () => {
    cy.visit('/profiles');
    cy.contains('Child Profiles');
    cy.get('li').should('have.length.greaterThan', 0); // Check that at least one profile is listed
  });

  it('should delete a child profile', () => {
    // Assuming a profile exists to delete
    cy.visit('/profiles');
    cy.get('li').first().within(() => {
      cy.contains('Delete').click();
    });

    // Check that the profile is deleted
    cy.get('li').should('have.length.lessThan', 1); // Ensure list has reduced
  });
});
