class ShoppingCartPage {
    private btnAddCard: string;
    
    constructor() {
        this.btnAddCard = ".ajax_add_to_cart_button > span";
    }

    public goToAddToCardPage(): void {
        cy.get(this.btnAddCard).click()
    }

}

export { ShoppingCartPage }
