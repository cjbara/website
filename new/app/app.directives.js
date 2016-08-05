angular.module('app.directives', [])

.directive('config', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/config.html'
	};
})

.directive('links', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/links.html'
	};
})

.directive('navbar', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/navbar.html'
	};
})

.directive('foot', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/footer.html'
	};
});