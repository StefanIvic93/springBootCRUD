describe("Testing vacations webapp", function() {

        it("Should open vacations webapp", function() {
              browser.get("http://localhost:8080/index.html#/");
                  console.log("Browser opened!");
    });

        it("Should click on the button 'click here'", function() {
              element(by.className("ng-binding")).click();
                  browser.sleep(2000)
                      console.log("Test compeleted!");
    });

});
