import {MenuContentPage,ShopingCartPage, ProductListPage,SumaryPage,LoginPage,AddressSetpPage, ShippingStepsPage,PaymentPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const shopingCartPage = new ShopingCartPage();
const sumaryPage = new SumaryPage();
const loginPage = new LoginPage();
const addressSetpPage = new AddressSetpPage();
const shippingStepsPage = new ShippingStepsPage();
const paymentPage = new PaymentPage();
const productListPage = new ProductListPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    shopingCartPage.goToAddToCardPage();
    productListPage.goToProdListProceedtoCheckout();
    sumaryPage.goToSumaryProceedtoCheckout();
    loginPage.goToEmailAddress();
    loginPage.goToPassword();
    loginPage.goToSumbitLogin();
    addressSetpPage.goToProceedCheckoutAddress();
    shippingStepsPage.gotoTermsOfService();
    shippingStepsPage.goToShippingProceedtoCheckout();
    paymentPage.goToPayhBankWire();
    paymentPage.goToPaymentProceedtoCheckout();
    cy.get(".cheque-indent > .dark").should("have.text", "Your order on My Store is complete.");
  });
});
