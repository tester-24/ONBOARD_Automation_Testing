
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

    //Onboard_Status
   
    cy.visit('https://uatonboard.jainam.in/RedirectToOnboard?token=NDI1fE9uYm9hcmR8SGVhZCBPZmZpY2U=')
    cy.wait(3000)

   //Search
   //cy.get('.serch_wrap').click()
  // cy.wait(2000)

   //UNDER VERIFICATION
   cy.get(':nth-child(3) > a > .card > .card-body > .f-11').click()
   cy.wait(3000)

   //SEARCH BY URC
   cy.get('.serch_wrap').type('10436203')
   cy.wait(2000)

   cy.get('a > #search').click()
   cy.get('.serch_wrap').clear()

    //SEARCH BY CODE
    cy.get('.serch_wrap').type('ITC444')
    cy.wait(2000)
 
    cy.get('a > #search').click()
    cy.get('.serch_wrap').clear()

    cy.get('#collapseExample > .card').click()
    cy.wait(3000)

    //Click on View 
    cy.get('[data-kendo-grid-item-index="7"] > [aria-colindex="1"] > [tooltip="View"] > .fa').click()
    cy.wait(3000)

    //Click on X Button 
    cy.get('.k-window-actions > .k-button > .k-icon').click()
    cy.wait(2000)
  })