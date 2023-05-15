Feature: Invoice Details
  Background: Pre conditions
    Given Login Page is loaded
    When User log into the application with username 'demouser' and password 'abc123'
    Then User is able should see invoice list page

  Scenario: TC003 - Validate invoice details
    Given Invoice list is loaded in the screen
    When User clicks on invoice details of first item present on the table
    Then User is able to see the information present on screen
    Examples:
            | Hotel Name | Invoice Date | Duo Date | Invoice Number | Booking Code | Customer Details | Room | Check In | Check Out | Total Stay Count | Total Stay Amount | Deposit Now | Tax & VAT | Total Amount |
            | Rendezvous Hotel 1 | 14/01/2018 | 15/01/2018 | #110 | 0875 | JOHNY SMITH R2, AVENUE DU MAROC 123456 | Superior Double | 14/01/2018 | 15/01/2018 | 1 | $150 | USD $20.90	 | USD $19 | USD $209 |

