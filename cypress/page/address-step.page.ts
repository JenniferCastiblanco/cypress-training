class AddressSetpPage {
    private btnProceedCheckoutAddress : string;
 

    constructor() {
        this.btnProceedCheckoutAddress =".cart_navigation > .button > span";
    }

    public goToProceedCheckoutAddress() : void{
        cy.get(this.btnProceedCheckoutAddress).click();
    }
}
export { AddressSetpPage }
