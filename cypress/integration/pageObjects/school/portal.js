/// <reference types="Cypress" />
const schoolpage = "div > div > div > div.category-content.no-padding > ul > li:nth-child(2) > a"
const notepage = '#hm'
const close = "tbody > tr:nth-child(1) > td:nth-child(1) > a > i"
const okbutton = "#content > div.panel > div > div > div > center > form > input.btn.btn-danger"
const savebutton = "#savePortalBtn"
const pdata = require("../../../fixtures/userdata/school.json")


export class portal {
    schoolpage() {
        cy.iframe('.responsive-iframe').find(schoolpage).should("be.visible").click()
    }

    addnote() {
        cy.iframe('.responsive-iframe').find(notepage).should("have.text", "Portal Notes").eq(0).click()
        cy.iframe('.responsive-iframe').find(close).should("be.visible")
        cy.iframe('.responsive-iframe').find(close).click({ force: true })
        cy.iframe('.responsive-iframe').find(okbutton).click()
        cy.wait(3000)
        cy.iframe('.responsive-iframe').find('.form-control').eq(0).type(pdata.title)
        cy.iframe('.responsive-iframe').find('.form-control').eq(1).type(pdata.note)
        cy.iframe('.responsive-iframe').find('.form-control').eq(2).type(pdata.sort)
        cy.iframe('.responsive-iframe').find('.form-control').eq(3).type(pdata.startdate)
        cy.iframe('.responsive-iframe').find('.form-control').eq(3).click()
        cy.iframe('.responsive-iframe').find('.form-control').eq(4).click({ force: true })
        cy.iframe('.responsive-iframe').find('.form-control').eq(4).type(pdata.enddate)

        cy.wait(1000)

        cy.iframe('.responsive-iframe').find(savebutton).should("be.visible").click()

    }

    deletenote() {
        cy.iframe('.responsive-iframe').find(notepage).should("have.text", "Portal Notes").eq(0).click()
        cy.enter('.responsive-iframe').then(getBody => {
            getBody().within(() => {
                if (cy.find(close)) {
                    cy.log('element present')
                    getBody().find(close).click()
                    getBody().find(okbutton).click()
                } else {
                    cy.log("element not present")
                }
            })



            /*   getBody().find(close).should('be.visible').click()
              getBody().find(okbutton).click() */
            cy.wait(3000)
        })
    }
}


