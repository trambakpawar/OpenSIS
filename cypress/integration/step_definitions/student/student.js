import { login } from "../../comman/Login"
import { student } from "../../pageObjects/student/student"
const lp = new login()
const st = new student()
const sdata = require("../../../fixtures/userdata/student.json")
// Add student
Given(/^I click on the add student in student section$/, function () {
    lp.login()
    st.studentpage()
});

When(/^I fill the student data$/, function () {
    st.addstudent()
});

Then(/^Student get added to school database$/, function () {
    cy.log("user created")
});

// Search student
Given(/^I click on the student info in student section$/, function () {
    lp.login()
    st.studentpage()
});

When(/^I search the student$/, function () {
    st.searchstudent()
});

Then(/^Student name should get displayed$/, function () {
    cy.iframe('.responsive-iframe').find('#results > tbody').should('have.text',"Pawar")
});
