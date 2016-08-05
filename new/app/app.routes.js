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
   			controller  : 'projectController',
    		controllerAs: 'pcontroller'
		})

		// resumes page
		.when('/resume', {
			templateUrl : 'views/resume.html',
   			controller  : 'mainController',
    		controllerAs: 'main'
		})

		// skills page
		.when('/skills', {
			templateUrl : 'views/skills.html',
   			controller  : 'mainController',
    		controllerAs: 'main'
		})

		// contact page
		.when('/contact', {
			templateUrl : 'views/contact.html',
   			controller  : 'contactController',
    		controllerAs: 'contact'
		});
});
