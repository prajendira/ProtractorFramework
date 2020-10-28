# Project - Protractor Jasmine Framework 

### Technologies
Node v12.19.0
npm 6.14.8
protractor 7.0.0

## Project Description
This is a protractor test using jasmine framework.

### Test Files ( all in .js)
##### conf.js - contains the configuration files to run the test (specs: ['../tests/calculator.js'])
##### calculator.js - main test script which calls the methods to run the test and appropriate test cases.  I've included two test cases, first test would pass however second test would fail intentionally to see how HTML reports display the failures.
##### homepage.js - contains Page Object Model with element locators and required actions

### How to Run the test - Run the conf.js
Go to commandline > Project Destination Folder> ProtractorDemo> protractor .\conf\conf.js

### How to see the HTML report 
Go to ProjectDemo folder and click ProtractorTestReport.html 

### How to view the screenshots
GO to ProjectDemo folder >target folder> screenshots folder > click the images to view the screenshots
and Click my-report.html to view the summary of the report.
