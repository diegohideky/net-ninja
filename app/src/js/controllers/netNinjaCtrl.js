(function () {
	'use strict',

	angular.module('App').controller('netNinjaCtrl', [ '$scope', '$http', function ($scope, $http) {

		$scope.addNinja = function () {
			$scope.newNinja.available = true;
			$scope.ninjas.push($scope.newNinja);
			$scope.newNinja = {};	
		};

		$scope.removeNinja = function (ninja) {
			var removedNinja = $scope.ninjas.indexOf(ninja);
			$scope.ninjas.splice(removedNinja, 1);
		};

		$http.get('src/data/ninjas.json').then(function (res) {
			$scope.ninjas = res.data;
		});
	}]);
}());