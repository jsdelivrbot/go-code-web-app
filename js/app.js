var app = angular.module('MyApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: "partials/home.html"
	})
	.when('/syllabus', {
		templateUrl: "partials/syllabus.html",
		controller: "SyllabusCtrl"
	})
	.when('/about', {
		templateUrl: "partials/about.html",
		controller: "AboutCtrl"
	})
	.when('/contact', {
		templateUrl: "partials/contact.html",
		controller: "ContactCtrl"
	})
	.otherwise({
		templateUrl: "partials/404.html"
	});
});
