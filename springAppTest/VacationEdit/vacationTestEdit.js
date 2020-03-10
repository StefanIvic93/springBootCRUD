describe("Testing vacations webapp", function() {

          it("Should open vacations webapp", function() {
              browser.get("http://localhost:8080/index.html#/");
                  console.log("Browser opened!");
    });

          it("Should click on the button 'click here'", function() {
              element(by.className("btn btn-default")).click();
                  browser.sleep(2000)
                      console.log("Test compeleted!");
    });

          it("Should click on the button 'View'", function() {
              element(by.css('a[href="#/vacations/97/view"]')).click();
                  browser.sleep(5000)
                      console.log("Test compeleted!");

    });

          it("Should click on the button 'View'", function() {
              element(by.css('a[href="#/vacations/97/edit"]')).click();
                  browser.sleep(1000)
                      console.log("Test compeleted!");

    });

          it("Should input text '244'", function() {
              element(by.model("vacation.country")).clear();
                  browser.sleep(1000)
                      console.log("Test compeleted!");
    });

          it("Should input text 'Serbia'", function() {
              element(by.model("vacation.country")).sendKeys("Russia");
                  browser.sleep(1000)
                      console.log("Test compeleted!");
    });

          it("Should input text '244'", function() {
              element(by.model("vacation.destination")).clear();
                  browser.sleep(1000)
                      console.log("Test compeleted!");
    });

          it("Should input text 'Gracanica'", function() {
              element(by.model("vacation.destination")).sendKeys("Moscow");
                  browser.sleep(1000)
                      console.log("Test compeleted!");
    });

          it("Should input text '244'", function() {
              element(by.model("vacation.transportation")).clear();
                  browser.sleep(1000)
                      console.log("Test compeleted!");
    });

          it("Should input text 'by car'", function() {
              element(by.model("vacation.transportation")).sendKeys("By airplane");
                  browser.sleep(1000)
                      console.log("Test compeleted!");
    });

          it("Should input text '244'", function() {
              element(by.model("vacation.distance")).clear();
                  browser.sleep(1000)
                      console.log("Test compeleted!");
    });

          it("Should input text '244'", function() {
              element(by.model("vacation.distance")).sendKeys("1714");
                  browser.sleep(1000)
                      console.log("Test compeleted!");
    });

          it("Should click on the button 'Save'", function() {
              element(by.className("btn btn-primary")).click();
                  browser.sleep(1000)
                      console.log("Test compeleted!");
    });

          it("Should click on the button 'click here'", function() {
              element(by.className("navbar-brand ng-binding")).click();
                  browser.sleep(1000)
                    console.log("Test compeleted!");
    });

});
