(function(){

	"use strict";

	angular
		.module("ngStars")
		.directive("starCard", function(){
			return {
				templateUrl:'components/stars/card/star-card.tpl.html',
				scope:{

				},
				controller: starCardController,
				controllerAs: "vm"
			}

			function starCardController(){
				
			}
		})

})();