angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'views/about.html'
		})
		
		// about page
		.when('/about', {
			templateUrl : 'views/about.html',
   			controller  : 'mainController',
    		controllerAs: 'main'
		})

		// projects page
		.when('/projects', {
			templateUrl : 'views/projects.html',
   			controller  : 'mainController',
    		controllerAs: 'main'
		});

	// use the HTML5 History API
    $locationProvider.html5Mode(true);
});
