angular.module('sidebarCtrl', [])

.controller('sidebarController', function() {

	var vm = this;

	vm.tabs = [];

	vm.tabs.push({
		title: 'About',
		link: 'about',
	});

	// vm.tabs.push({
	// 	title: 'Work Experience',
	// 	link: 'work',
	// });

	vm.tabs.push({
		title: 'Skills',
		link: 'skills',
	});

	vm.tabs.push({
		title: 'Projects',
		link: 'projects',
	});

	vm.tabs.push({
		title: 'R\xE9sum\xE9',
		link: 'resume',
	});

});