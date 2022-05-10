class SumaryPage {
    private btnSumaryProceedToCheckout : string;

    constructor() {
        this.btnSumaryProceedToCheckout =".cart_navigation > .button > span"
    }

    public goToSumaryProceedtoCheckout() : void{
        cy.get(this.btnSumaryProceedToCheckout).click();
    }
}

export { SumaryPage }
