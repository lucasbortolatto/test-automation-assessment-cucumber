Feature: Invoice Details
  Background: Pre conditions
    Given Login page is loaded
    When User log into the application with username 'demouser' and password 'abc123'
    Then User is able should see invoice list page

  Scenario: TC003 - Validate invoice details
    Given Invoice list is loaded in the screen
    When User clicks on invoice details of first item present on the table
    Then User is able to see invoice details page
    Then User should see hotel name displayed as '<hotelName>'
    Then User should see invoice date '<invoiceDate>' and duo date '<duoDate>'
    Then User is able to see invoice number '<invoiceNumber>'
    Then User is able to see booking code '<bookingCode>'
    Then User is able to see customer details '<customerDetails>'
    Then User should see room '<room>' type
    Then User should see checkin '<checkIn>' and checkout '<checkOut>' dates  
    Then User should see total stay count '<totalStayCount>' and total stay amount '<totalStayAmount>'
    Then User is able to see billing details like deposit now '<depositNow>', tax&VAT '<taxAndVat>' and total amount '<totalAmount>'


    Examples:

            | hotelName | invoiceDate | duoDate | invoiceNumber | bookingCode | customerDetails | room | checkIn | checkOut | totalStayCount | totalStayAmount | depositNow | taxAndVat | totalAmount |
            | Rendezvous Hotel | 14/01/2018 | 15/01/2018 | #110 | 0875| \n    \n    JOHNY SMITHR2, AVENUE DU MAROC123456\n    \n | Superior Double | 14/01/2018 | 15/01/2018 | 1 | $150 | USD $20.90 | USD $19 | USD $209 |
            