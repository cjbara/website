angular.module('app.directives', [])

.directive('userView', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/userView.html'
	};
})

.directive('mobileUserView', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/mobileUserView.html'
	};
})

.directive('about', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/about.html'
	};
})

.directive('skills', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/skills.html'
	};
})

.directive('projects', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/projects.html'
	};
})

.directive('myHeader', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/head.html'
	};
})

.directive('sidebar', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/sidebar.html'
	};
});