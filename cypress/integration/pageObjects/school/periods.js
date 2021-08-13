/// <reference types="Cypress" />
const schoolpage = "div > div > div > div.category-content.no-padding > ul > li:nth-child(2) > a"
const periodpage = 'div > div.category-content.no-padding > ul > li:nth-child(2) > ul > li:nth-child(2)'
const savebutton = "#btn_save"
const checkbox = "div > label > input[type=checkbox]"
const grade = ".checkbox-inline"
const pdata = require("../../../fixtures/userdata/periods.json")
export class period {
    schoolpage() {
        cy.iframe('.responsive-iframe').find(schoolpage).should("be.visible").click()
    }

    addperiod() {
        cy.iframe('.responsive-iframe').find(periodpage).should("have.text", "Marking Periods").eq(0).click()
        cy.iframe('.responsive-iframe').find(checkbox).should('have.value', 'Y').eq(0).check()
        cy.wait(1000)

        cy.iframe('.responsive-iframe').find(savebutton).should("be.visible").click()
    }
}