/// <reference types="Cypress" />
const username = "#username"
const password = "#password"
const loginbutton = "body > section > div > div > div.panel-body > div > div > form > div:nth-child(5) > div > button"
const logoutbutton = "#user-nav > ul > li:nth-child(3) > a"
const myaccount = "body > div.page-container > div > div.sidebar.sidebar-main > div > div > div > div.sidebar-user-material > div.category-content > div.sidebar-user-material-menu > a"

const logindata = require("../../fixtures/userdata/login.json")

export class login {


    login() {
        cy.visit(logindata.baseurl)
        cy.get(username).type(logindata.username)
        cy.get(password).type(logindata.password)
        cy.get(loginbutton).click()
        cy.log("Login Successfully")
    }

    logout() {
        cy.get(logoutbutton).click()
        cy.log("Logout Successfully")
    }
}