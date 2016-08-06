angular.module('mainCtrl', [])

.controller('mainController', ['$scope', '$route', function ($scope, $route) {

	var vm = this;

	vm.pageTitle = 'Cory Jbara';
	vm.showHeader = true;

	$scope.$on('$routeChangeSuccess', function (data) {
		console.dir($route);

		vm.showHeader = true;

		switch($route.current.loadedTemplateUrl) {
			case 'views/about.html':
				vm.pageTitle = 'About Me';
				break;
			case 'views/contact.html':
				vm.pageTitle = 'Contact Me';
				break;
			case 'views/projects.html':
				vm.pageTitle = 'Projects';
				break;
			case 'views/skills.html':
				vm.pageTitle = 'Skills';
				break;
			case 'views/resume.html':
				vm.showHeader = false;
				vm.pageTitle = 'Resume';
				break;
		}
	});

}]);