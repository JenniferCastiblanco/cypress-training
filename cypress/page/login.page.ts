class LoginPage {
    private txtEmailAddress : string;
    private txtPassword : string;
    private btnSubmitLogin : string;

    constructor() {
        this.txtEmailAddress ="#email";
        this.txtPassword = "#passwd";
        this.btnSubmitLogin ="#SubmitLogin > span"
    }

    public goToLoginCredential (txtEmailAddress:string, txtPassword:string) : void {
        cy.get(this.txtEmailAddress).type("aperdomobo@gmail.com");
        cy.get(this.txtPassword).type("WorkshopProtractor");
    }
    
    public goToSumbitLogin() : void{
        cy.get(this.btnSubmitLogin).click();
    }
}
export { LoginPage }
