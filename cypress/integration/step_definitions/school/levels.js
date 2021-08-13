
import { login } from "../../comman/Login"
import { level } from "../../pageObjects/school/levels"
const lp = new login()
const lv = new level()
const ldata = require("../../../fixtures/userdata/levels.json")

//portal
Given(/^I click on the setup page$/, function () {
    lp.login()
    lv.schoolpage()
});

When(/^I click on grade level and fill the data of level$/, function () {
    lv.addlevel()
});

Then(/^Grade level get added to school portal$/, function () {
    cy.iframe('.responsive-iframe').contains(ldata.title).should("be.visible")
    cy.log("Period added")
});
