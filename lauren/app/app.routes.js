angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl : 'views/home.html'
		})
		
		.when('/home', {
			templateUrl : 'views/home.html',
		})

		.when('/bio', {
			templateUrl : 'views/bio.html',
		})

		.when('/gallery', {
			templateUrl : 'views/gallery.html',
		})

		.when('/reel', {
			templateUrl : 'views/reel.html',
		})

		.when('/clips', {
			templateUrl : 'views/clips.html',
		});
});
