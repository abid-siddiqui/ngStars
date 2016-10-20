(function(){
	
	"use strict";

	angular
		.module('ngStars')
		.controller('starsCtrl', function($scope, $http, starsFactory, $mdSidenav, $mdToast, $mdDialog){

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
					showToast("Star saved!");
				}
			}

			$scope.editStar = function(star) {
				$scope.editing = true;
				$scope.openSidebar();
				$scope.star = star;
			}

			$scope.saveEdit = function(){
				$scope.editing = false;
				$scope.star = {};
				$scope.closeSidebar();
				showToast("Edit saved!");
			}

			$scope.deleteStar = function(event, star){

				var confirm = $mdDialog.confirm()
								.title('Are you sure to delelte ' + star.title + '?')
								.ok('Yes')
								.cancel('No')
								.targetEvent(event);
				$mdDialog.show(confirm).then(function(){
					var index = $scope.stars.indexOf(star);
					$scope.stars.splice(index, 1);
				});
				
			}

			function showToast(message) {
				$mdToast.show(
						$mdToast.simple()
							.content(message)
							.position('top, right')
							.hideDelay(3000)
					);
			}

		});

})();
