describe("demonstrate visiting a search engine", () => {
  //A before hook in the describe block makes the spec easily expandable while not interfering with
  //other specs in the future or overbuilding for a small demo
  before(() => {
    cy.visit('/');
  })
  it("Searches for clover and verifies that we get an ad for the company", () => {
    //A custom data type would be better but obviously impossible
    //An alternative would be to look for the first form input
    cy.get('#search_form_input_homepage').type('Clover{Enter}')
    //Here we lever duckduckgo's own testid
    cy.get('[data-testid="result-title-a"]').first().should('contain', 'Mobile Payments. Fast & Simple')
  })
})
