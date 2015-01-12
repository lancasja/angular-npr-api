// 1. Define a module
// Module: Collection of functions to run when app starts
// 2. Instantiate it in HTML ( ng-app="myApp" )

var app = angular.module('myApp', []);
var apiKey = 'MDE3Mjc0NTcxMDE0MTQ4Nzg5MTQ1YzJkNA001',
		nprUrl = 'http://api.npr.org/query?id=3&fields=title,storyDate,audio,image&requiredAssets=audio&dateType=story&output=JSON';

// anything attached to $scope is available to the view
// anything in app.run() will run before the rest of the app

// root controller
app.controller('PlayerController', ['$scope', '$http', function($scope, $http) {
	
	$scope.playing = false;

	/* =========================================== */
	/* will be refactored,
			bad idea to manipulate DOM in a controller */


	// create an audio element
	$scope.audio = document.createElement('audio');
	
	/* =========================================== */
	
	// play audio
	$scope.play = function(story) {
		if ($scope.playing) {
			$scope.audio.pause();
		}

		var url = story.audio[0].format.mp4.$text;
		console.log(url);

		$scope.audio.src = url;
		$scope.audio.play();
		$scope.playing = true;
	}

	// pause audio
	$scope.pause = function() {
		$scope.audio.pause();
		$scope.playing = false;
	}

	// stop at end of audio (don't loop)
	$scope.audio.addEventListener('ended', function() {
		$scope.$apply(function() {
			$scope.pause();
		});
	});

	// make HTTP request
	$http({
		method: 'JSONP',
		url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
	}).success(function(data, status) {
		// we have a data object to play with
		$scope.stories = data.list.story;
	}).error(function(data, status) {
		// something went wrong
	});
}]);

// keep track of audio element
// fetch NPR listings
app.controller('RelatedController', ['$scope', function() {
	
}]);

/* ================ */
/* == Directives == */
/* ================ */

// app.directive('nprLink', function() {
// 	return {
// 		restrict: 'EA',
// 		require: ['^ngModel'],
// 		replace: true,
// 		scope: {
// 			ngModel: '=',
// 			play: '&'
// 		},
// 		templateUrl: 'views/nprListItem.html',
// 		link: function(scope, ele, attr) {
// 			scope.duration = scope.ngModel.audio[0].duration.$text;
// 		}
// 	}
// });














































