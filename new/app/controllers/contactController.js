angular.module('contactCtrl', [])

.controller('contactController', function() {

	var vm = this;

	vm.copyright = 'copyright-unselected';

	vm.show = false;

	vm.setContactInfo = function(contactType) {
		vm.show = true;
		switch(contactType) {
			case 'mail-square':
				vm.text = 'Email Me: cjbara@nd.edu'; break;
			case 'facebook':
				vm.text = 'Visit Me On Facebook'; break;
			case 'twitter':
				vm.text = 'Follow Me On Twitter'; break;
			case 'linkedin':
				vm.text = 'Connect With Me On LinkedIn'; break;
			case 'github':
				vm.text = 'Check Out My GitHub Profile'; break;
		}

		vm.copyright = 'copyright-selected';
		vm.id = contactType;
	};

	vm.hideContact = function() {
		vm.show = false;
		vm.copyright = 'copyright-unselected';
	}

});