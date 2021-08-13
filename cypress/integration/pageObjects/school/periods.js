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

        cy.enter('.responsive-iframe').then(getbody => {
            getbody().contains('input[name="tables[18][TITLE]"]').clear()
        })


        cy.iframe('.responsive-iframe').find('input[name="tables[18][DOES_COMMENTS]"]').eq(0).check()
        cy.iframe('.responsive-iframe').find('input[name="tables[18][DOES_GRADES]"]').eq(0).check()
        cy.iframe('.responsive-iframe').find('input[id="date_3"]').eq(0).type(pdata.postingstart)
        cy.iframe('.responsive-iframe').find('input[id="date_4"]').eq(0).type(pdata.postingend)
        cy.wait(1000)

        cy.iframe('.responsive-iframe').find(savebutton).should("be.visible").click()
    }
}