describe("Testing vacations webapp", function() {

        it("Should open vacations webapp", function() {
              browser.get("http://localhost:8080/index.html#/");
                  console.log("Browser opened!");
    });

        it("Should click on the button 'click here'", function() {
              element(by.className("btn btn-default")).click();
                  browser.sleep(1000)
                      console.log("Test compeleted!");
    });

        it("Should click on the button 'View'", function() {
                element(by.css('a[href="#/vacations/97/view"]')).click();
                    browser.sleep(3000)
                        console.log("Test compeleted!");

    });

        it("Should click on the button 'click here'", function() {
            element(by.className("navbar-brand ng-binding")).click();
                browser.sleep(2000)
                    console.log("Test compeleted!");
   });

});
