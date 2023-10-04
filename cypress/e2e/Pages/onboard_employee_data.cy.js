
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

   //Employee_Data
    cy.get(':nth-child(22) > a > .card > .card-body').click()
    cy.wait(4000)

    // //Edit
    // cy.get('[data-kendo-grid-item-index="2"] > [aria-colindex="1"]').click()
    // cy.wait(3000)

    // //Edit Address 
    // cy.get('#deltaAddressId')
    // .type("{downArrow}{Enter}{Enter}{Enter}")
    
    
    cy.get('.row > .k-grid > .k-grid-aria-root > .k-grid-container > .k-grid-content').click()
    cy.wait(3000)

    //Click on 3rd Page
    cy.get('.k-pager-numbers > :nth-child(3) > .k-link').click()
    cy.wait(3000)

    //Click on 10th Page
    cy.get('.k-pager-numbers > :nth-child(10) > .k-link').click()
    cy.wait(3000)

    //Selecting Grid
    
    cy.get('.card.employee_btn_wrap > .card-body').click()
    cy.wait(3000)

    //EDIT
    cy.get('[data-kendo-grid-item-index="196"] > [aria-colindex="1"] > .client_action_status_wrap > a > .fa').click()
    cy.wait(3000)

    // Edit Address
    cy.get('#deltaAddressId')
    .type("{downArrow}{Enter}{Enter}")
  })