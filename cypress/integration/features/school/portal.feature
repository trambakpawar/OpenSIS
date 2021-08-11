Feature: Check the school setup page

Scenario: Add note to portal
 Given I click on the setup page
  When I fill the data of notes
  Then Note get added to school portal

@focus
Scenario: if else weblement code
 Given I click on the setup page
  When I check the webelement
  Then Note get deleted from portal