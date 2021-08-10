/// <reference types="Cypress" />
const studentpage = "div > div > div > div.category-content.no-padding > ul > li:nth-child(3) > a"
const addstudent = "div > div.category-content.no-padding > ul > li:nth-child(3) > ul > li:nth-child(2)"
const infopage = "div > div.category-content.no-padding > ul > li:nth-child(3) > ul > li:nth-child(1)"
const searchcheck = "#search > div:nth-child(9) > div > label:nth-child(2) > div > span > input"
const sdata = require("../../../fixtures/userdata/student.json")
const searchbutton = "#searchStuBtn"
const savebutton = "#mod_student_btn"
export class student {

    studentpage() {
        cy.iframe('.responsive-iframe').find(studentpage).should('be.visible').click()
    }

    addstudent() {
        cy.iframe('.responsive-iframe').find(addstudent).should('have.text', 'Add a Student').eq(0).click()
        cy.iframe('.responsive-iframe').find('.col-lg-8').eq(0).type(sdata.firstname)
        cy.iframe('.responsive-iframe').find('.col-lg-8').eq(1).type(sdata.middlename)
        cy.iframe('.responsive-iframe').find('.col-lg-8').eq(2).type(sdata.lastname)
        cy.iframe('.responsive-iframe').find('.form-control').eq(3).select(sdata.suffix)
        cy.iframe('.responsive-iframe').find('.col-lg-8').eq(4).type(sdata.gradedate)
        cy.iframe('.responsive-iframe').find('.col-lg-4').eq(5).click()
        cy.iframe('.responsive-iframe').find('.form-control').eq(5).select(sdata.gender)
        cy.iframe('.responsive-iframe').find('.form-control').eq(6).select(sdata.ethincity)
        cy.iframe('.responsive-iframe').find('.form-control').eq(7).type(sdata.commanname)
        cy.iframe('.responsive-iframe').find('.form-control').eq(8).type(sdata.dob)
        cy.iframe('.responsive-iframe').find('.col-lg-4').eq(8).click()
        cy.iframe('.responsive-iframe').find('.form-control').eq(9).select(sdata.langauge)
        cy.iframe('.responsive-iframe').find('.form-control').eq(10).type(sdata.email)
        cy.iframe('.responsive-iframe').find('.form-control').eq(11).type(sdata.phone)
        cy.iframe('.responsive-iframe').find('.form-control').eq(14).select(sdata.grade)
        cy.iframe('.responsive-iframe').find('.form-control').eq(15).select(sdata.section)
        cy.iframe('.responsive-iframe').find('.form-control').eq(16).type(sdata.username)
        cy.iframe('.responsive-iframe').find('.form-control').eq(17).type(sdata.password)

        cy.iframe('.responsive-iframe').find(savebutton).should('be.visible').click()
    }


    searchstudent() {
        cy.iframe('.responsive-iframe').find(infopage).should('have.text', 'Student Info').eq(0).click()
        cy.iframe('.responsive-iframe').find('.col-md-6').eq(0).type(sdata.lastname)
        cy.iframe('.responsive-iframe').find('.col-md-6').eq(1).type(sdata.firstname)
        cy.iframe('.responsive-iframe').find(searchcheck).should('have.value', 'Y').eq(0).check()
        cy.iframe('.responsive-iframe').find(searchbutton).should('be.visible').click()
    }
}

