Feature: Check student Page

Scenario: Add student to school
 Given I click on the add student in student section
  When I fill the student data
  Then Student get added to school database


Scenario: Search student in school
Given I click on the student info in student section
When I search the student
Then Student name should get displayed
