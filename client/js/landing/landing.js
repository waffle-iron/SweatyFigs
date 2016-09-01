angular.module('fridgely', [])
	.controller('fridgely.landingPageController', function($scope) {
		// title
		$scope.LPtext = {};
		$scope.LPtext.title = 'fridgely';
		$scope.LPtext.descriptions = ['Be food-savy.', 'Act fridge-friendly.', 'Use fridgely.'];
		
	});