describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    cy.visit('http://automationpractice.com/');
    cy.get('.sf-menu > :nth-child(3) > a').click();
    cy.get('.ajax_add_to_cart_button > span').click();
    cy.get('.button-container > .button-medium > span').click();
    cy.get('.cart_navigation > .button > span').click();
    cy.get('#email').type('aperdomobo@gmail.com');
    cy.get('#passwd').type('WorkshopProtractor');
    cy.get('#SubmitLogin > span').click();
    cy.get('.cart_navigation > .button > span').click();
    cy.get('#cgv').click();
    cy.get('.cart_navigation > .button > span').click();
    cy.get('.bankwire').click();
    cy.get('#cart_navigation > .button > span').click();
    cy.get('.cheque-indent > .dark').should('have.text','Your order on My Store is complete.');
  });
});
