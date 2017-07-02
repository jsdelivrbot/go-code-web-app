var app = angular.module('MyApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('');

	$routeProvider
	.when('/', {
		templateUrl: "partials/home.html"
	})
	.when('/rooms', {
		templateUrl: "partials/rooms.html",
		controller: "RoomsCtrl"
	})
	.when('/directions', {
		templateUrl: "partials/directions.html",
		controller: "DirecitonsCtrl"
	})
	.when('/about-us', {
		templateUrl: "partials/about-us.html",
		controller: "AboutUsCtrl"
	})
	.when('/contact', {
		templateUrl: "partials/contact.html",
		controller: "ContactCtrl"
	})
	.otherwise({
		templateUrl: "partials/404.html"
	});
});
