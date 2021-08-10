/// <reference types="Cypress" />
const schoolpage = "div > div > div > div.category-content.no-padding > ul > li:nth-child(2) > a"
const notepage = '#hm'
const close = "#results > tbody > tr:nth-child(1) > td:nth-child(1) > a > i"
const okbutton = "#content > div.panel > div > div > div > center > form > input.btn.btn-danger"
const title = "#values\[new\]\[TITLE\]"
const pdata = require("../../../fixtures/userdata/school.json")


export class portal {
    schoolpage() {
        cy.iframe('.responsive-iframe').find(schoolpage).should("be.visible").click()
    }

    addnote() {
        cy.iframe('.responsive-iframe').find(notepage).should("have.text", "Portal Notes").eq(0).click()
       /*  cy.iframe('.responsive-iframe').find(close).then(() => {
            cy.iframe('.responsive-iframe').find(close).click().
                cy.iframe('.responsive-iframe').find(okbutton).click()
            cy.wait(3000)

        }) */
            cy.iframe('.responsive-iframe').find('.form-control').eq(0).type(pdata.title)



    }
}