
/// <reference types="cypress"/>

// import { LoginPage } from "./Pages/IPO_login.cy.js"
// const loginPage = new LoginPage

it('Onboard_Jainam', () => {
    cy.visit('https://uatonboard.jainam.in/startup')
    cy.wait(3000)
  
    //LOGIN WITH SPACE 
    cy.get('.login-space-btn').click()
    cy.wait(2000)
  
    //Userid
    cy.get(':nth-child(2) > .text_form').type('425')
  
    //Password
    cy.get('#LoginPassword').type('Tina@123')
    cy.wait(2000)
  
    cy.get('.arrow').click()
    cy.wait(3000)
  
    // Enter OTP 
    cy.get('[formcontrolname="otp1"]').type('1')
    cy.get('[formcontrolname="otp2"]').type('2')
    cy.get('[formcontrolname="otp3"]').type('3')
    cy.get('[formcontrolname="otp4"]').type('4')
    cy.wait(3000)

    //Onboard_Masters
   
    cy.visit('https://uatonboard.jainam.in/RedirectToOnboard?token=NDI1fE9uYm9hcmR8SGVhZCBPZmZpY2U=')
    cy.wait(3000)


    //UNDER VERIFICATION
    cy.get(':nth-child(3) > a > .card > .card-body > .f-11').click()
    cy.wait(3000)


    //Received - Underverification - Applying Filters

    //Received
    cy.get('.col_wrap_first_cward > :nth-child(2) > .slds-checkbox_button-group').click()
    cy.wait(3000)

    cy.get('.para_kendo_values > .k-grid').click()
    cy.wait(3000)

    //Under Verification
    cy.get('.col_wrap_first_cward > :nth-child(3)').click()
    cy.wait(3000)

    cy.get('[style="margin-bottom: 20px;"] > :nth-child(3) > :nth-child(5)').click()
    cy.wait(3000)

    //MOD - DELTA
    cy.get(':nth-child(6) > .slds-checkbox_button-group').click()
    cy.wait(2000)

    //DUCK
    cy.get(':nth-child(7) > .slds-checkbox_button-group').click()
    cy.wait(3000)

    //Grid
    cy.get('.para_kendo_values > .k-grid > .k-grid-aria-root > .k-grid-container > .k-grid-content').click()
    cy.wait(3000)

    //E-KYC
    cy.get('[style="margin-bottom: 20px;"] > :nth-child(4) > :nth-child(2)').click()
    cy.wait(3000)

    //MANUAL
    cy.get(':nth-child(4) > :nth-child(3) > .slds-checkbox_button-group').click()
    cy.wait(3000)

    //Display All 
    cy.get(':nth-child(5) > :nth-child(1) > .slds-checkbox_button-group').click()
    cy.wait(2000)

    cy.get(':nth-child(4) > :nth-child(1) > .slds-checkbox_button-group').click()

    //View
    cy.get('[data-kendo-grid-item-index="8"] > [aria-colindex="1"] > a > .fa').click()
   
  })