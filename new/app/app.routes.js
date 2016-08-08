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
		})

		// projects page
		.when('/projects', {
			templateUrl : 'views/projects.html',
		})

		// work experience page
		.when('/work', {
			templateUrl : 'views/work.html',
		})

		// resumes page
		.when('/resume', {
			templateUrl : 'views/resume.html',
		})

		// skills page
		.when('/skills', {
			templateUrl : 'views/skills.html',
		})

		// contact page
		.when('/contact', {
			templateUrl : 'views/contact.html',
		});
});
