(function(){
	
	"use strict";

	angular
		.module('ngStars')
		.controller('starsCtrl', function($scope, $http, starsFactory, $mdSidenav){

			starsFactory.getStars().then(function(response){
				$scope.stars = response.data;

			});

			$scope.openSidebar = function(){
				$mdSidenav('left').open();//becuase our md-component-id is left
			}

			$scope.closeSidebar = function(){
				$mdSidenav('left').close();
			}

		});

})();