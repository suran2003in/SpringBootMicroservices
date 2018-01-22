angular.module('chollaTechApp')
  .controller('chollaController', function ($scope, $http, $routeParams) {
	 /* $http({
          method: 'GET',
          url: '/participants/races/' + $routeParams.raceId
      }).then(function (response) {
    	  $scope.participants = response.data;
      }, function(response) {
    	  console.error('Error requesting participants.')
      });*/
  });