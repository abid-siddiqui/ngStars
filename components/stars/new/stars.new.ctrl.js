(function(){
	"use strict";

	angular
		.module('ngStars')
		.controller('newStarsCtrl', function($scope, $state, $mdSidenav, $timeout, $mdDialog, starsFactory){

			var vm = this;
			vm.closeSidebar = closeSidebar;

			$timeout(function(){
				$mdSidenav('left').open();		
			});

			$scope.$watch('vm.sidenavOpen', function(sidenav){
				if(sidenav === false) {
					$mdSidenav('left')
						.close()
						.then(function(){
							$state.go('stars');
						});
				}
			});

			function closeSidebar(){
				vm.sidenavOpen = false;
			}

		})

})();