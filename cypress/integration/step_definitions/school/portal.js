
import { login } from "../../comman/Login"
import { portal } from "../../pageObjects/school/portal"
const lp = new login()
const pt = new portal()
const pdata = require("../../../fixtures/userdata/school.json")

//portal
Given(/^I click on the setup page$/, function () {
    lp.login()
    pt.schoolpage()
});

When(/^I fill the data of notes$/, function () {
    pt.addnote()
});

Then(/^Note get added to school portal$/, function () {
    cy.iframe('.responsive-iframe').find('.form-control').eq(0).should("be.visible")
    cy.log("Notes added")
});

When(/^I check the webelement$/, function () {
    pt.deletenote()
});

Then(/^Note get deleted from portal$/, function () {
    cy.iframe('.responsive-iframe').find('.form-control').eq(0).should("not.exist")
    cy.log("Notes deleted")
});