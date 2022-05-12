import {MenuContentPage, ShoppingCartPage, ProductsListPage} from "../page/index";
import {LoginPage, AddressStepPage, ShippingStepPage, PaymentStepPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressSetpPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();
const productsListPage = new ProductsListPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    shoppingCartPage.goToAddToCardPage();
    productsListPage.goToProdListProceedtoCheckout();
    productsListPage.goToSummaryProceedtoCheckout();
    loginPage.goToLogin();
    loginPage.goToSumbitLogin();
    addressSetpPage.goToProceedCheckoutAddress();
    shippingStepPage.gotoTermsOfService();
    shippingStepPage.goToShippingProceedtoCheckout();
    paymentStepPage.goToPayhBankWire();
    paymentStepPage.goToPaymentProceedtoCheckout();
    cy.get(".cheque-indent > .dark").should("have.text", "Your order on My Store is complete.");
  });
});
