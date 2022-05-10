class ProductListPage {
    private btnProdListProceedToCheckout : string;

    constructor() {
            this.btnProdListProceedToCheckout =".button-container > .button-medium > span"
    }

    public goToProdListProceedtoCheckout() : void{
        cy.get(this.btnProdListProceedToCheckout).click();
    }
}

export { ProductListPage }
