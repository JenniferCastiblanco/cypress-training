class PaymentPage {
    private btnPaymentProceedToCheckout : string;
    private btnPayBankWire : string;
    private btnConfirmMyOrder : string;
    
    constructor() {
        this.btnPayBankWire = ".bankwire"
        this.btnPaymentProceedToCheckout =".cart_navigation > .button > span"
        this.btnConfirmMyOrder = "s"
    }
    public goToPayhBankWire() : void{
        cy.get(this.btnPayBankWire).click();
    }
    public goToPaymentProceedtoCheckout() : void{
        cy.get(this.btnPaymentProceedToCheckout).click();
    }
    public gotoConfirmMyOrder() : void{
        cy.get(this.btnConfirmMyOrder).click();
    }
}

export { PaymentPage }
