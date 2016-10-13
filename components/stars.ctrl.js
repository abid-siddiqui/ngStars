(function(){
	
	"use strict";

	angular
		.module('ngStars')
		.controller('starsCtrl', function($scope, $http, starsFactory){

			starsFactory.getStars().then(function(response){
				$scope.stars = response.data;

			});
		});

})();