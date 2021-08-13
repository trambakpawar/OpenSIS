/// <reference types="Cypress" />
const schoolpage = "div > div > div > div.category-content.no-padding > ul > li:nth-child(2) > a"
const periodpage = 'div > div.category-content.no-padding > ul > li:nth-child(2) > ul > li:nth-child(5)'
const savebutton = "#setupGradeLvlBtn"


const ldata = require("../../../fixtures/userdata/levels.json")
export class level {
    schoolpage() {
        cy.iframe('.responsive-iframe').find(schoolpage).should("be.visible").click()
    }

    addlevel() {
        cy.iframe('.responsive-iframe').find(periodpage).should("have.text", "Grade Levels").eq(0).click()
        cy.iframe('.responsive-iframe').find('input[name="values[new][TITLE]"]').should("have.text", "").eq(0).type(ldata.title)
        cy.iframe('.responsive-iframe').find('input[name="values[new][SHORT_NAME]"]').should("have.text", "").eq(0).type(ldata.shortname)
        cy.iframe('.responsive-iframe').find('input[name="values[new][SORT_ORDER]"]').should("have.text", "").eq(0).type("5")

        cy.iframe('.responsive-iframe').find(savebutton).should("be.visible").click()

    }
}