
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

    //Checker Dashboard
    cy.get(':nth-child(2) > [style="justify-content: center;"] > .col-8 > .row > :nth-child(1) > a > .card > .card-body').click()
    cy.wait(3000)

   //Under Verification Clients
   cy.get(':nth-child(3) > a > .card > .card-body').click()
   cy.wait(3000)

   //Download PDF
   cy.get('span > .fa').click()
   cy.wait(3000)

   //Display The Reason
   cy.get('[placement="bottom"] > .fa').click()
   cy.wait(3000)

   //Click on X button 
   cy.get('.k-window-actions').click()
   cy.wait(3000)

   //Edit the details
   cy.get('[data-kendo-grid-item-index="2"] > [aria-colindex="1"] > a > .fa').click()
   cy.wait(3000)
  })