(function(){
	
	"use strict";

	angular
		.module('ngStars')
		.controller('starsCtrl', function($scope, $http, starsFactory, $mdSidenav, $mdToast){

			starsFactory.getStars().then(function(response){
				$scope.stars = response.data;

			});

			var contact = {
				name: "Allen",
				phone: "(555)555-5555",
				email:"starTech@gmail.com"
			}

			$scope.openSidebar = function(){
				$mdSidenav('left').open();//becuase our md-component-id is left
			}

			$scope.closeSidebar = function(){
				$mdSidenav('left').close();
			}

			$scope.saveStar = function(star){
				if (star) {
					star.contact = contact;
					$scope.stars.push(star);
					$scope.star = {};
					$scope.closeSidebar();
					$mdToast.show(
						$mdToast.simple()
							.content("Star saved!")
							.position('top, right')
							.hideDelay(3000)
					);
				}
			}

		});

})();