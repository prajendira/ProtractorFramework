let homepage = require('../pages/homepage');  //accessing homepage from pages folder

describe('demo calculator tests', function(){
    //TestCase: 1 'addition tests'
    it('addition tests', function(){
        //navigate to angular calculator application
        homepage.get('http://juliemr.github.io/protractor-demo/');
       
        
        //Enter the first number inside the first input box 
        homepage.enterFirstNumber('25'); //if you write the value without using quotation will throw error
        
        //Enter the second number inside the second input box
        homepage.enterSecondNumber('3');
        //Click Go Button
        homepage.clickGo();
        //verify the output by getText and compare with the output 28
        homepage.verifyResult('28');
        //wait for 2 seconds
        browser.sleep(2000);
       
    });
    //Test Case: 2 'subtraction tests'
    it('subtraction tests', function(){
        //intend to fail the test by adding clickGo1
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('25'); //if you write the value without using quotation will throw error
        homepage.enterSecondNumber('3');
        homepage.clickGo1();
        homepage.verifyResult('28');
        browser.sleep(2000);
        
    });

});