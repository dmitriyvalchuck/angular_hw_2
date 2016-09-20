var app = angular.module("Gallery", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "home-page"
		})
		.when("/photo/:photoId", {
			templateUrl: "photo-page"
		});
});