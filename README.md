# Test Automation Assessment
_____________________________

These tests were created as a challenge to automate three scenarios using cypress.

### Scenarios

- TC001 - Login (Positive) Test
- TC002 - Login (Negative) Tests
- TC003 - Validate invoice details

### Author
Luidson Lucas Bortolatto


### Important Informations

- To automate these scenarios I have used BDD and separeted login tests from invoice tests in different files.

- For both login and invoice test I have used Cypress custom commands on `/support/commands.js` file to centralize commons actions and reuse the code.

- The test "TC002 - Login (Negative) Tests" is failing because as it was specified on test assessment description, the test should pass when user types wrong user and/or password. However, in the data provided on the document, the latest data on the table specified has user and password correct. I have implemented it as described.

- For "TC003 - Validate invoice details" test, I have used one extra argument called `invoiceTobeOpened` in "Examples" than arguments specified on the assessment data table. It was used in order to make easier to validate other invoices (in case there are more invoices added to the application in the future and we can test them by adding new iterations. For example, if we want to also test the second invoice from the Invoice List, we can do it by passing the number 2 as argument)

- As specified previously, some custom commands were used for common actions, and additionally, for Invoice Details tests, I have used some alias in order to reuse some selectors and avoid code duplication. An alternative could be using the Page Objects pattern to do it. However, the [Cypress documentation](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/) recommends not using it, using custom commands and alias instead of Page Objects. It's important to say that Cypress supports Page Objects and it can be used.


### How to execute the tests

#### Pre-conditions
- NodeJS (It was used version 20.x)
- Google Chrome installed

#### Steps
1. Clone this repository;
2. Run `npm install` and wait for the installation to finish;
3. Optional: Open the project on your favorite IDE;
3. Run tests using command line running `npm run tests` or using cypress tool `npm run cypress:open`



 
For questions please feel free to contact me by email: lucasbortolatto2@hotmail.com