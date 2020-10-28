describe("DropDown Demo", function(){
    it("Handling DropDown in Practor", function(){
        browser.get('http://juliemr.github.io/protractor-demo/');

        /*
        element(by.model('first')).sendKeys('1234');
        element(by.model('second')).sendKeys('1254');
        element(by.buttonText('Go!')).click();
        browser.sleep(5000);
        */
        //way 1 to: select module % element from DropDown List
        element(by.model('operator')).element(by.css("option[value='MODULO']")).click();
        browser.sleep(5000);
        //use chained locators to find sub element =>element(by.css('somecss')).element(by.tagName('tag-wihin-css'));
        
        //way 2:  to: select DropDownList
        element.all(by.options('value for (key, value) in operators')).get(4).click();
    
        //way 3: css containing text
        element(by.cssContainingText('option', '*')).click();
        
    });
});