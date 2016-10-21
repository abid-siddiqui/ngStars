
angular
	.module('ngStars', ['ngMaterial', 'ui.router'])
	.config(function($mdThemingProvider, $stateProvider){

		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');

		$stateProvider
			.state('stars', {
				url:'/stars',
				templateUrl:'components/stars/stars.tpl.html',
				controller: 'starsCtrl as vm'
			});

	});



