// angular
// 	.module('ngStars', ['ngMaterial'])
// 	.config(function($mdThemingProvider){

// 		$mdThemingProvider.theme('default')
// 			.primaryPalette('teal')
// 			.accentPalette('orange');

// 	})
// 	.directive('helloWorld', function(){
// 		return {
// 			template:'<h1>hiiiiii</h1>'
// 		}
// 	});


angular
	.module('ngStars', ['ngMaterial'])
	.config(function($mdThemingProvider){

		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');

	})
	.directive('helloWorld', function(){
		return {
			template:'<h1>hiiiiii</h1>'
		}
	});

