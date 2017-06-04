(function () {
	'use strict';

	angular.module('App').directive('randomNinja', [ function () {
		return {
			restrict: 'E',
			scope: {
				ninjas: '=',
				title: '='
			},
			templateUrl: 'views/pages/random.html',
			controller: function ($scope) {
				$scope.random = Math.floor(Math.random() * 4);
			}
		};
	}]);
}());