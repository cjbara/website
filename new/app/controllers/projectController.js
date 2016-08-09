angular.module('projCtrl', [])

.controller('projectController', function () {

	var vm = this;

	vm.projects = [[],[],[]];

	vm.projects[0].push({
		title: 'WhereYouAt',
		desc: 'Designed and built an iOS app that allows users to know what their friends are doing on any given night.',
		github: 'https://github.com/jrocha2/WhereYouAt',
		image: 'assets/images/whereYouAt.jpg',
		showGitHubNote: false
	});

	vm.projects[1].push({
		title: 'IrishTrade',
		desc: 'Created a new system for students at ND to buy and sell goods and services. This project had a very complicated backend in Oracle.',
		github: 'https://github.com/cjbara/IrishTrade',
		application: 'http://52.33.64.5:8161/',
		report: 'https://docs.google.com/document/d/1r6JlfXOn0SzLfYiQa_iZ73OxZqqXnqq9udrDUItUPOM/edit?usp=sharing',
		image: 'assets/images/irishTrade.jpg',
		showGitHubNote: false
	});

	vm.projects[2].push({
		title: 'C-Minor Compiler',
		desc: 'Created a full compiler for a C-like language called C-Minor, implementing a scanner, parser, type checker, and code generator.',
		github: 'https://github.com/cjbara/cminorCompiler',
		image: 'assets/images/compilers.jpg',
		showGitHubNote: false
	});

	vm.projects[2].push({
		title: 'Super Mario Bros',
		desc: 'Recreated the first level of the classic NES side-scroller, Super Mario Bros, using Object Oriented Programming in C++',
		github: 'https://github.com/cjbara/SuperMarioBros',
		modal: '#marioModal',
		image: 'assets/images/mario1.jpg',
		showGitHubNote: false
	});

	vm.projects[1].push({
		title: 'PacMan',
		desc: 'Programmed a working version of PacMan in C, using discrete movements and the original algorithms for the ghost movement.',
		github: 'https://github.com/cjbara/PacMan',
		modal: '#pacmanModal',
		image: 'assets/images/pacmanhome.png',
		showGitHubNote: false
	});

	vm.projects[0].push({
		title: 'ND Room Picks',
		desc: 'My team of 4 created a new web interface that allows undergraduate students to pick on-campus rooms using mySQL as the database and PHP.',
		github: 'https://github.com/cjbara/domerdoors',
		image: 'assets/images/dome.jpg',
		showGitHubNote: false
	});

	vm.projects[2].push({
		title: 'Ellie\'s Deli App',
		desc: 'Built an online ordering application for the Fisher Hall food service, Ellie\'s Deli',
		github: 'https://ellies-deli.firebaseapp.com/',
		image: 'assets/images/ellies.jpg',
		showGitHubNote: false
	});

	vm.projects[0].push({
		title: 'CoryJbara.com',
		desc: 'Recently redesigned this site using AngularJS and MaterializeCSS. Compared to the old application, it is much prettier and smoother.',
		github: 'http://github.com/cjbara/website',
		app: 'http://coryjbara.com/old',
		image: 'assets/images/website.jpg',
		showGitHubNote: false
	});

	// vm.projects.push({
	// 	title: '',
	// 	desc: '',
	// 	github: '',
	// 	modal: '',
	// 	image: 'assets/images/'
	// });

});