
# Reg-Order-Automation

This is an end-to-end automated project of the "Registration" & "PlaceOrder" pages of the "nopCommerce" site.

Its a Page Object Model along with Fixture implemented automated project which will give total build every midnight 12.00 am on Jenkins Continious Integration platform. 


## Stacks

- Framework:      Cypress
- Language :      JavaScript
- Reporting Tool: Allure & Mocha
- CI:             Jenkins   


## Test Report

- Tests: Positive, Negative, Boundary value Analysis, Edge case, Application Flow.
- Test Suit : 2
- Test Case: 41
- Test Coverage : 100%
- Total Bugs & Fault: 29+
- Bug Priority: Critical, Major, Minor.
- Test Passed: 12





## Installation & Dependencies

```bash
npm init -y
npm install cypress --save-dev
npm i cypress-xpath
npm i --save-dev cypress-mochawesome-reporter
npm i -D @shelex/cypress-allure-plugin
npx allure generate
```
