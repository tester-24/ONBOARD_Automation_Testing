
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

    //Pending
    cy.get('.marg > .col-8 > .row > :nth-child(2) > a > .card > .card-body').click()
    cy.wait(3000)

    //INCOMPLETE - COMPLETE

    //Display INCOMPLETE 
    cy.get('.client-gust-ob1 > :nth-child(2) > .slds-checkbox_button-group > .slds-checkbox_button__label > .text-muted').click()
    cy.wait(3000)

    //Display COMPLETE
    cy.get('.client-gust-ob1 > :nth-child(3) > .slds-checkbox_button-group > .slds-checkbox_button__label > .text-muted').click()
    cy.wait(7000)


    //Working on Filters - AOF 
    cy.get('.client-gust-ob3 > :nth-child(2) > .slds-checkbox_button-group > .slds-checkbox_button__label > .text-muted').click()
    cy.wait(3000)

    //MOD
    cy.get('.client-gust-ob3 > :nth-child(3) > .slds-checkbox_button-group').click()
    cy.wait(3000)
    
   // DUCK
   cy.get('.client-gust-ob3 > :nth-child(7)')
   cy.wait(3000)


    // // Deleting a Record
    // cy.get('[data-kendo-grid-item-index="2"] > [aria-colindex="1"] > [tooltip="Edit"] > .fa').click()
    // cy.wait(2000)
   

    // ENTER URC NUMBER 
    cy.get('.col-md-3 > .form-control').type('10436215')
    .type("{downArrow}{Enter}")
    cy.wait(2000)

    //Close on CLOSE BUTTON
    cy.get('.k-window-actions').click()
    cy.wait(2000)

    //Deleting a Record
    cy.get('[data-kendo-grid-item-index="1"] > [aria-colindex="1"] > [assignclientstocheckers=""] > .fa').click()
    cy.wait(3000)

    cy.get('.modal-footer > :nth-child(1)').click()
    cy.wait(4000)

    //Edit Record
    cy.get('[data-kendo-grid-item-index="6"] > [aria-colindex="1"] > [tooltip="Edit"] > .fa').click()
    cy.wait(3000)
  })