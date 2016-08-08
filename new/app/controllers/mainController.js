angular.module('mainCtrl', [])

.controller('mainController', ['$scope', '$route', '$timeout', function ($scope, $route, $timeout) {

	var vm = this;

	vm.pageTitle = 'Cory Jbara';
	vm.showHeader = true;

	$scope.$on('$routeChangeSuccess', function (data) {

		vm.showHeader = true;

		switch($route.current.loadedTemplateUrl) {
			case 'views/about.html':
				vm.pageTitle = 'HI THERE, I\'M CORY';
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
			case 'views/work.html':
				vm.pageTitle = 'Work Experience';
				break;
			case 'views/resume.html':
				vm.showHeader = false;
				vm.pageTitle = 'Resume';
				break;
		}
	});

	vm.about = true;
	vm.hobbies = false;
	vm.prez = false;

	vm.select = function(selected) {
		vm.about = false;
		vm.hobbies = false;
		vm.prez = false;

		switch(selected) {
			case 'about': vm.about = true; break;
			case 'hobbies': vm.hobbies = true; break;
			case 'prez': vm.prez = true; break;
		}
	};

}]);