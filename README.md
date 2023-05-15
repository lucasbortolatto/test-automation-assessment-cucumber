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

To automate these scenarios I have used BDD and separeted login tests from in invoice tests in different files.

I have created three custom commands for repeated and generic actions (.ie type username and password) on /support/commands.js.

For both login and invoice test I have used cypress custom commands to centralize commons actions and reuse the code.

Ps: The "TC002 - Login (Negative) Tests" is failing because as it was specified on test assessment description, the test should pass when user types wrong user and/or password. However, in the data provided on document, the latest data on the table specified have user and password correct. I have implemented as described.


### How to execute the tests

#### Pre-conditions
- NodeJS (It was used version 20.x)
- Google Chrome installed

#### Steps
1. Clone this repository;
2. Run `npm install` and wait for installation finish;
3. Optional: Open the project on your favorite IDE;
3. Run tests using command line running `npm run tests` or using cypress tool `npm run cypress:open`



 
For questions please feel free to contact me by email: lucasbortolatto2@hotmail.com