describe('Express testing', () => {
  it('Running on localhost:5500', () => {
    cy.visit('http://localhost:5500');
  });

  it('Deployed on github pages', () => {
    cy.visit('https://solidtop.github.io/esc-hacker-escape-rooms/');
  });

  it('Navigate to challenges by clicking on Play online', () => {
    cy.visit('https://solidtop.github.io/esc-hacker-escape-rooms/');
    cy.get('.main-menu li a').first().click();
    cy.url().should('include', '/challenges');
  });
});
