angular.module('App', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/pages/home.html',
			controller: 'netNinjaCtrl'
		})
		.when('/directory', {
			templateUrl: 'views/pages/directory.html',
			controller: 'netNinjaCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);