export class LoginPage {

    enterUsername() {
        //cy.get(':nth-child(2) > .text_form').clear()
        cy.get(':nth-child(2) > .text_form').type('425')
    }

    enterPassword() {
        cy.get('.wrap_password_show > .text_form').type('Tina@123')
    }

    clickLogin() {
        cy.get('.arrow').click({ force: true });
    }
}