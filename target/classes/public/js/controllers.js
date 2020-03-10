angular.module('app.controllers', []).controller('VacationListController', function($scope, $state, popupService, $window, Vacation) {
  $scope.vacations = Vacation.query(); //fetch all vacations. Issues a GET to /api/vi/vacations

  $scope.deleteVacation = function(vacation) { // Delete a Vacation. Issues a DELETE to /api/v1/vacations/:id
    if (popupService.showPopup('Really delete this?')) {
      vacation.$delete(function() {
        $scope.vacations = Vacation.query(); 
        $state.go('vacations');
      });
    }
  };
}).controller('VacationViewController', function($scope, $stateParams, Vacation) {
  $scope.vacation = Vacation.get({ id: $stateParams.id }); //Get a single vacation.Issues a GET to /api/v1/vacations/:id
}).controller('VacationCreateController', function($scope, $state, $stateParams, Vacation) {
  $scope.vacation = new Vacation();  //create new vacation instance. Properties will be set via ng-model on UI

  $scope.addVacation = function() { //create a new vacation. Issues a POST to /api/v1/vacations
    $scope.vacation.$save(function() {
      $state.go('vacations'); // on success go back to the list i.e. vacations state.
    });
  };
}).controller('VacationEditController', function($scope, $state, $stateParams, Vacation) {
  $scope.updateVacation = function() { //Update the edited vacation. Issues a PUT to /api/v1/vacations/:id
    $scope.vacation.$update(function() {
      $state.go('vacations'); // on success go back to the list i.e. vacations state.
    });
  };

  $scope.loadVacation = function() { //Issues a GET request to /api/v1/vacations/:id to get a vacation to update
    $scope.vacation = Vacation.get({ id: $stateParams.id });
  };

  $scope.loadVacation(); // Load a vacation which can be edited on UI
});
