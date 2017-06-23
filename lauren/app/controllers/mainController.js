angular.module('mainCtrl', [])

.controller('mainController', ['$scope', '$route', '$timeout', function ($scope, $route, $timeout) {

	var vm = this;

	$scope.$on('$routeChangeSuccess', function (data) {

		vm.isCurrent = {
			home: "",
			bio: "",
			reel: "",
			gallery: "",
			clips: ""
		}

		switch($route.current.loadedTemplateUrl) {
			case 'views/home.html':
				vm.isCurrent.home = "current";
				break;
			case 'views/bio.html':
				vm.isCurrent.bio = "current";
				break;
			case 'views/reel.html':
				vm.isCurrent.reel = "current";
				break;
			case 'views/clips.html':
				vm.isCurrent.clips = "current";
				break;
			case 'views/gallery.html':
				vm.isCurrent.gallery = "current";
				break;
		}
	});

}]);
