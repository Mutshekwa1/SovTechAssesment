$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature Files/SovTechFeatures/ContactUsFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Contact Us Page Feature",
  "description": "",
  "id": "contact-us-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify that the contact form can be submitted successfully with all required fields filled in correctly.",
  "description": "",
  "id": "contact-us-page-feature;verify-that-the-contact-form-can-be-submitted-successfully-with-all-required-fields-filled-in-correctly.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Given the User is on the contact us page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Enter Full Name \"\u003cFullName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Enter email \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Enter Mobile number \"\u003cMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Selects Company size \"\u003cCompanySize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Selects the type of service \"\u003cServices\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Enter how can we help you text \"\u003cHelpText\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user clicks on the Send message button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "A success Message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "contact-us-page-feature;verify-that-the-contact-form-can-be-submitted-successfully-with-all-required-fields-filled-in-correctly.;",
  "rows": [
    {
      "cells": [
        "FullName",
        "Email",
        "MobileNumber",
        "CompanySize",
        "Services",
        "HelpText"
      ],
      "line": 18,
      "id": "contact-us-page-feature;verify-that-the-contact-form-can-be-submitted-successfully-with-all-required-fields-filled-in-correctly.;;1"
    },
    {
      "cells": [
        "Farisani Nonyana",
        "rof@gmail.com",
        "0794188672",
        "1 - 25",
        "Web App",
        "Web automation using selenium and cucumber"
      ],
      "line": 19,
      "id": "contact-us-page-feature;verify-that-the-contact-form-can-be-submitted-successfully-with-all-required-fields-filled-in-correctly.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Verify that the contact form can be submitted successfully with all required fields filled in correctly.",
  "description": "",
  "id": "contact-us-page-feature;verify-that-the-contact-form-can-be-submitted-successfully-with-all-required-fields-filled-in-correctly.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Given the User is on the contact us page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Enter Full Name \"Farisani Nonyana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Enter email \"rof@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Enter Mobile number \"0794188672\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Selects Company size \"1 - 25\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Selects the type of service \"Web App\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Enter how can we help you text \"Web automation using selenium and cucumber\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user clicks on the Send message button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "A success Message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsPageStepDefs.given_the_User_is_on_the_contact_us_page()"
});
formatter.result({
  "duration": 15677597300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Farisani Nonyana",
      "offset": 22
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_Full_Name(String)"
});
formatter.result({
  "duration": 220504500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rof@gmail.com",
      "offset": 18
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_email(String)"
});
formatter.result({
  "duration": 166229000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0794188672",
      "offset": 26
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_Mobile_number(String)"
});
formatter.result({
  "duration": 162390200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 - 25",
      "offset": 27
    }
  ],
  "location": "ContactUsPageStepDefs.user_Selects_Company_size(String)"
});
formatter.result({
  "duration": 177891300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Web App",
      "offset": 34
    }
  ],
  "location": "ContactUsPageStepDefs.user_Selects_the_type_of_service(String)"
});
formatter.result({
  "duration": 143414300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Web automation using selenium and cucumber",
      "offset": 37
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_how_can_we_help_you_text(String)"
});
formatter.result({
  "duration": 279260800,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsPageStepDefs.the_user_clicks_on_the_Send_message_button()"
});
formatter.result({
  "duration": 117738400,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsPageStepDefs.a_success_Message_is_displayed()"
});
formatter.result({
  "duration": 4512030900,
  "status": "passed"
});
formatter.after({
  "duration": 1695978800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Test the form\u0027s validation by submitting it with missing or incorrect information in one or more fields.",
  "description": "",
  "id": "contact-us-page-feature;test-the-form\u0027s-validation-by-submitting-it-with-missing-or-incorrect-information-in-one-or-more-fields.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "Given the User is on the contact us page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "The user clicks on the Send message button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Then verify if errors are being displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsPageStepDefs.given_the_User_is_on_the_contact_us_page()"
});
formatter.result({
  "duration": 11828652500,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsPageStepDefs.the_user_clicks_on_the_Send_message_button()"
});
formatter.result({
  "duration": 175631800,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsPageStepDefs.thenVerifyIfErrorsAreBeingDisplayed()"
});
formatter.result({
  "duration": 135501600,
  "status": "passed"
});
formatter.after({
  "duration": 1095980500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Verify that the form displays an error message when submitted without a valid email address.",
  "description": "",
  "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-without-a-valid-email-address.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "Given the User is on the contact us page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User Enter Full Name \"\u003cFullName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User Enter email \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Enter Mobile number \"\u003cMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User Selects Company size \"\u003cCompanySize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User Selects the type of service \"\u003cServices\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Enter how can we help you text \"\u003cHelpText\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Verify expected error \"\u003cErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-without-a-valid-email-address.;",
  "rows": [
    {
      "cells": [
        "FullName",
        "Email",
        "MobileNumber",
        "CompanySize",
        "Services",
        "HelpText",
        "ErrorMessage"
      ],
      "line": 40,
      "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-without-a-valid-email-address.;;1"
    },
    {
      "cells": [
        "Farisani Nonyana",
        "rofgmail.com",
        "0794188672",
        "1 - 25",
        "Web App",
        "Web automation using selenium and cucumber",
        "Email must be formatted correctly."
      ],
      "line": 41,
      "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-without-a-valid-email-address.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "Verify that the form displays an error message when submitted without a valid email address.",
  "description": "",
  "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-without-a-valid-email-address.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "Given the User is on the contact us page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User Enter Full Name \"Farisani Nonyana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User Enter email \"rofgmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Enter Mobile number \"0794188672\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User Selects Company size \"1 - 25\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User Selects the type of service \"Web App\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Enter how can we help you text \"Web automation using selenium and cucumber\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Verify expected error \"Email must be formatted correctly.\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsPageStepDefs.given_the_User_is_on_the_contact_us_page()"
});
formatter.result({
  "duration": 14302956100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Farisani Nonyana",
      "offset": 22
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_Full_Name(String)"
});
formatter.result({
  "duration": 214269200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rofgmail.com",
      "offset": 18
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_email(String)"
});
formatter.result({
  "duration": 161228800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0794188672",
      "offset": 26
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_Mobile_number(String)"
});
formatter.result({
  "duration": 154625700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 - 25",
      "offset": 27
    }
  ],
  "location": "ContactUsPageStepDefs.user_Selects_Company_size(String)"
});
formatter.result({
  "duration": 129289800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Web App",
      "offset": 34
    }
  ],
  "location": "ContactUsPageStepDefs.user_Selects_the_type_of_service(String)"
});
formatter.result({
  "duration": 106328500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Web automation using selenium and cucumber",
      "offset": 37
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_how_can_we_help_you_text(String)"
});
formatter.result({
  "duration": 254351000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email must be formatted correctly.",
      "offset": 23
    }
  ],
  "location": "ContactUsPageStepDefs.verifyExpectedErrors(String)"
});
formatter.result({
  "duration": 65305700,
  "status": "passed"
});
formatter.after({
  "duration": 1233518600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "Verify that the form displays an error message when submitted with mobile number that is shorter than expected",
  "description": "",
  "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-with-mobile-number-that-is-shorter-than-expected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "Given the User is on the contact us page",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "User Enter Full Name \"\u003cFullName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User Enter email \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User Enter Mobile number \"\u003cMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User Selects Company size \"\u003cCompanySize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User Selects the type of service \"\u003cServices\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User Enter how can we help you text \"\u003cHelpText\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "The user clicks on the Send message button",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "Verify expected error \"\u003cErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-with-mobile-number-that-is-shorter-than-expected;",
  "rows": [
    {
      "cells": [
        "FullName",
        "Email",
        "MobileNumber",
        "CompanySize",
        "Services",
        "HelpText",
        "ErrorMessage"
      ],
      "line": 57,
      "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-with-mobile-number-that-is-shorter-than-expected;;1"
    },
    {
      "cells": [
        "Farisani Nonyana",
        "rof@gmail.com",
        "07941",
        "1 - 25",
        "Web App",
        "Web automation using selenium and cucumber",
        "The number you entered is not in range."
      ],
      "line": 58,
      "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-with-mobile-number-that-is-shorter-than-expected;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 58,
  "name": "Verify that the form displays an error message when submitted with mobile number that is shorter than expected",
  "description": "",
  "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-with-mobile-number-that-is-shorter-than-expected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "Given the User is on the contact us page",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "User Enter Full Name \"Farisani Nonyana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User Enter email \"rof@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User Enter Mobile number \"07941\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User Selects Company size \"1 - 25\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User Selects the type of service \"Web App\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User Enter how can we help you text \"Web automation using selenium and cucumber\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "The user clicks on the Send message button",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "Verify expected error \"The number you entered is not in range.\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsPageStepDefs.given_the_User_is_on_the_contact_us_page()"
});
formatter.result({
  "duration": 10869442800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Farisani Nonyana",
      "offset": 22
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_Full_Name(String)"
});
formatter.result({
  "duration": 194410700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rof@gmail.com",
      "offset": 18
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_email(String)"
});
formatter.result({
  "duration": 168302900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07941",
      "offset": 26
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_Mobile_number(String)"
});
formatter.result({
  "duration": 127676700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 - 25",
      "offset": 27
    }
  ],
  "location": "ContactUsPageStepDefs.user_Selects_Company_size(String)"
});
formatter.result({
  "duration": 130973700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Web App",
      "offset": 34
    }
  ],
  "location": "ContactUsPageStepDefs.user_Selects_the_type_of_service(String)"
});
formatter.result({
  "duration": 113227400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Web automation using selenium and cucumber",
      "offset": 37
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_how_can_we_help_you_text(String)"
});
formatter.result({
  "duration": 223013000,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsPageStepDefs.the_user_clicks_on_the_Send_message_button()"
});
formatter.result({
  "duration": 132637200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The number you entered is not in range.",
      "offset": 23
    }
  ],
  "location": "ContactUsPageStepDefs.verifyExpectedErrors(String)"
});
formatter.result({
  "duration": 916855600,
  "status": "passed"
});
formatter.after({
  "duration": 1213962200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 60,
  "name": "Verify that the form displays an error message when submitted with non numeric character on the mobile number field.",
  "description": "",
  "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-with-non-numeric-character-on-the-mobile-number-field.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 62,
  "name": "Given the User is on the contact us page",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "User Enter Full Name \"\u003cFullName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User Enter email \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User Enter Mobile number \"\u003cMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User Selects Company size \"\u003cCompanySize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User Selects the type of service \"\u003cServices\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User Enter how can we help you text \"\u003cHelpText\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "The user clicks on the Send message button",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "Verify expected error \"\u003cErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 72,
  "name": "",
  "description": "",
  "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-with-non-numeric-character-on-the-mobile-number-field.;",
  "rows": [
    {
      "cells": [
        "FullName",
        "Email",
        "MobileNumber",
        "CompanySize",
        "Services",
        "HelpText",
        "ErrorMessage"
      ],
      "line": 73,
      "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-with-non-numeric-character-on-the-mobile-number-field.;;1"
    },
    {
      "cells": [
        "Farisani Nonyana",
        "rof@gmail.com",
        "07941xy",
        "1 - 25",
        "Web App",
        "Web automation using selenium and cucumber",
        "Must contain only numbers, +()-. and x."
      ],
      "line": 74,
      "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-with-non-numeric-character-on-the-mobile-number-field.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 74,
  "name": "Verify that the form displays an error message when submitted with non numeric character on the mobile number field.",
  "description": "",
  "id": "contact-us-page-feature;verify-that-the-form-displays-an-error-message-when-submitted-with-non-numeric-character-on-the-mobile-number-field.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "Given the User is on the contact us page",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "User Enter Full Name \"Farisani Nonyana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User Enter email \"rof@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User Enter Mobile number \"07941xy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User Selects Company size \"1 - 25\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User Selects the type of service \"Web App\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User Enter how can we help you text \"Web automation using selenium and cucumber\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "The user clicks on the Send message button",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "Verify expected error \"Must contain only numbers, +()-. and x.\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsPageStepDefs.given_the_User_is_on_the_contact_us_page()"
});
formatter.result({
  "duration": 10487964700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Farisani Nonyana",
      "offset": 22
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_Full_Name(String)"
});
formatter.result({
  "duration": 217799600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rof@gmail.com",
      "offset": 18
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_email(String)"
});
formatter.result({
  "duration": 184127900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07941xy",
      "offset": 26
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_Mobile_number(String)"
});
formatter.result({
  "duration": 176565900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 - 25",
      "offset": 27
    }
  ],
  "location": "ContactUsPageStepDefs.user_Selects_Company_size(String)"
});
formatter.result({
  "duration": 146515300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Web App",
      "offset": 34
    }
  ],
  "location": "ContactUsPageStepDefs.user_Selects_the_type_of_service(String)"
});
formatter.result({
  "duration": 132334600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Web automation using selenium and cucumber",
      "offset": 37
    }
  ],
  "location": "ContactUsPageStepDefs.user_Enter_how_can_we_help_you_text(String)"
});
formatter.result({
  "duration": 322971600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsPageStepDefs.the_user_clicks_on_the_Send_message_button()"
});
formatter.result({
  "duration": 153003300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Must contain only numbers, +()-. and x.",
      "offset": 23
    }
  ],
  "location": "ContactUsPageStepDefs.verifyExpectedErrors(String)"
});
formatter.result({
  "duration": 80305600,
  "status": "passed"
});
formatter.after({
  "duration": 1410760200,
  "status": "passed"
});
});