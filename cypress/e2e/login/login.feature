Feature: Login
  Background: Pre conditions
    Given Login Page is loaded

  Scenario: TC001 - Login (Positive)
    When User enters username as '<username>' and password as '<password>'
    When User clicks on login button
    Then User is able should see invoice list page
    Examples:
            | username | password |
            | demouser    | abc123 |

  Scenario: TC002 - Login (Negative)
    When User enters username as '<username>' and password as '<password>'
    When User clicks on login button
    Then User is not able to log into application and error message is displayed
    Examples:
            | username | password |
            | Demouser    | abc123 |
            | demouser_    | xyz |
            | demouser    | nananana |
            | demouser    | abc123 |