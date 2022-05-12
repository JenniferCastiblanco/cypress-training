class ProductsListPage {
    private btnProdListProceedToCheckout : string;
    private btnSummaryProceedToCheckout : string;

    constructor() {
            this.btnProdListProceedToCheckout =".button-container > .button-medium > span"
            this.btnSummaryProceedToCheckout =".cart_navigation > .button > span"
    }

    public goToProdListProceedtoCheckout() : void{
        cy.get(this.btnProdListProceedToCheckout).click();
    }

    public goToSummaryProceedtoCheckout() : void{
        cy.get(this.btnSummaryProceedToCheckout).click();
    }
}

export { ProductsListPage }
