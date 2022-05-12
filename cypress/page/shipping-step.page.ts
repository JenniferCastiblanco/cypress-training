class ShippingStepPage {
    private btnShippingProceedToCheckout : string;
    private chekcTermsOfService : string;

    constructor() {
        this.btnShippingProceedToCheckout =".cart_navigation > .button > span"
        this.chekcTermsOfService ="#cgv"
    }
    public gotoTermsOfService() : void{
        cy.get(this.chekcTermsOfService).click();
    }

    public goToShippingProceedtoCheckout() : void{
        cy.get(this.btnShippingProceedToCheckout).click();
    }
}

export { ShippingStepPage }
