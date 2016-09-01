angular.module('fridgely.landing', [])
	.controller('LandingPageController', function($scope) {
		// title
		$scope.LPtext = {};
		$scope.LPtext.title = 'fridgely';
		$scope.LPtext.descriptions = ['Be food-savy.', 'Act fridge-friendly.', 'Use fridgely.'];
		
	});