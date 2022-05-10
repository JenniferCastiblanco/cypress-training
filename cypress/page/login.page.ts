class LoginPage {
    private txtEmailAddress : string;
    private txtPassword : string;
    private btnSubmitLogin : string;

    constructor() {
        this.txtEmailAddress ="#email";
        this.txtPassword = "#passwd";
        this.btnSubmitLogin ="#SubmitLogin > span"
    }

    public goToEmailAddress() : void{
        cy.get(this.txtEmailAddress).type("aperdomobo@gmail.com");
    }

    public goToPassword() : void{
        cy.get(this.txtPassword).type("WorkshopProtractor");
    }

    public goToSumbitLogin() : void{
        cy.get(this.btnSubmitLogin).click();
    }
}
export { LoginPage }
