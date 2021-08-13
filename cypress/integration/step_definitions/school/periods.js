
import { login } from "../../comman/Login"
import { period } from "../../pageObjects/school/periods"
const lp = new login()
const pr = new period()
const pdata = require("../../../fixtures/userdata/periods.json")

//portal
Given(/^I click on the setup page$/, function () {
    lp.login()
    pr.schoolpage()
});

When(/^I click on making period and fill the data of period$/, function () {
    pr.addperiod()
});

Then(/^Period get added to school portal$/, function () {
    cy.iframe('.responsive-iframe').find('.col-md-4').contains(pdata.title).should("be.visible")
    cy.log("Period added")
});
