let homepage = function() {

    //Create element locators
    let firs_inputBox = element(by.model('first'));
    let second_inputBox = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));


    this.get = function(url){
        browser.get(url);
    }
    //create all actions to the elements firstNo = 2
    this.enterFirstNumber = function(firstNo){
        firs_inputBox.sendKeys(firstNo);
    }
    //secondNo = 3
    this.enterSecondNumber = function(secondNo){
        second_inputBox.sendKeys(secondNo);
    }
    this.clickGo = function(){
        goButton.click();
    }
    //result should be 5
    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    }
};

module.exports = new homepage();
//want to expose this perticular function homepage() of everything in this file so it can use by any external file then use module.export = new homepage()
