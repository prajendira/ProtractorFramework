# Project - Protractor Jasmine Framework 

### Technologies

**Node v12.19.0**
**npm 6.14.8**
**Protractor 7.0.0**
**Jasmine 3.6.2**

## Project Description
The purpose of this test is to to check the functionalities of the calculator functions using protractor jasmine framework and generate HTML report and screenshots.

### Test Files ( all in .js)
**conf.js** - contains the configuration files to run the test called *calculator.js* (specs: ['../tests/calculator.js'])

**homepage.js**- contains **Page Object Model** with element locators and required actions

**calculator.js** - main test script which calls the methods to run the test for the appropriate test cases.  There are two test cases included within the **it** *block*, first test case is to pass the test, however second test case is to fail intentionally to see how HTML reports display the failures.

### Step 1: Run the test - Run the conf.js
Go to commandline > Project Destination Folder> ProtractorDemo > **protractor .\conf\conf.js**

### Step 2: View the HTML report 
Go to **ProjectDemo** folder and *click* ProtractorTestReport.html 

### Step 3: View the screenshots
Go to **ProjectDemo** folder >**target** folder> **screenshots** folder > *click* the images to view the screenshots
and *click* **my-report.html** to *view* the summary of the report.
