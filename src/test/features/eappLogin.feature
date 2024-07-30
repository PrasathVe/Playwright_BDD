Feature: User Authentication tests

  Background:
    Given User Lands on Home page
    And User click on the login link

  Scenario: Login should be success
    And User enter the username as "admin"
    And User enter the password as "password"
    When User click on the login button
    Then Login should be success

  Scenario: Login should not be success
    Given User enter the username as "prasath"
    Given User enter the password as "Prasath123"
    When User click on the login button
    But Login should fail
