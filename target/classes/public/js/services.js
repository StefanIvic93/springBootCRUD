angular.module('app.services', []).factory('Vacation', function($resource) {
  return $resource('/api/v1/vacations/:id', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
