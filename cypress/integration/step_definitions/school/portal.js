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
    cy.log("Notes added")
});