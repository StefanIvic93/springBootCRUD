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

        it("Should click on the button 'Add vacation'", function() {
            element(by.className("btn-primary btn-lg nodecoration")).click();
                browser.sleep(1000)
                    console.log("Test compeleted!");
    });

        it("Should input text 'Serbia'", function() {
            element(by.model("vacation.country")).sendKeys("Serbia");
                browser.sleep(1000)
                    console.log("Test compeleted!");
    });

        it("Should input text 'Gracanica'", function() {
            element(by.model("vacation.destination")).sendKeys("Gracanica");
                browser.sleep(1000)
                    console.log("Test compeleted!");
    });

        it("Should input text 'by car'", function() {
            element(by.model("vacation.transportation")).sendKeys("By car");
                browser.sleep(1000)
                    console.log("Test compeleted!");
    });

        it("Should input text '244'", function() {
            element(by.model("vacation.distance")).sendKeys("244");
                browser.sleep(1000)
                    console.log("Test compeleted!");
    });

        it("Should input text '10/03/2019'", function() {
            element(by.model("vacation.departureDate")).sendKeys("10/03/2019");
                browser.sleep(1000)
                    console.log("Test compeleted!");
    });

        it("Should input text '15/03/2019'", function() {
            element(by.model("vacation.returnDate")).sendKeys("15/03/2019");
                browser.sleep(1000)
                    console.log("Test compeleted!");
    });

        it("Should input text '50'", function() {
            element(by.model("vacation.price")).sendKeys("50");
                browser.sleep(1000)
                    console.log("Test compeleted!");
    });

        it("Should click on the button 'Save'", function() {
            element(by.className("btn btn-primary")).click();
                browser.sleep(5000)
                    console.log("Test compeleted!");
    });

        it("Should click on the button 'click here'", function() {
            element(by.className("navbar-brand ng-binding")).click();
                browser.sleep(1000)
                    console.log("Test compeleted!");
  });

});
