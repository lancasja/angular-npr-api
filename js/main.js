// 1. Define a module
// Module: Collection of functions to run when app starts
// 2. Instantiate it in HTML ( ng-app="myApp" )

var app = angular.module('myApp', []);

// anything attached to $scope is available to the view
// anything in app.run() will run before the rest of the app

// root controller
app.controller('PlayerController', ['$scope', function($scope) {
	
	$scope.playing = false;

	/* =========================================== */
	/* will be refactored,
			bad idea to manipulate DOM in a controller */


	// create an audio element
	$scope.audio = document.createElement('audio');
	
	// set the source
	$scope.audio.src = '/audio/ht-bluesy.mp3';
	
	/* =========================================== */
	
	// play audio
	$scope.play = function() {
		$scope.audio.play();
		$scope.playing = true;
	}

	// pause audio
	$scope.pause = function() {
		$scope.audio.pause();
		$scope.playing = false;
	}

	$scope.audio.addEventListener('ended', function() {
		$scope.$apply(function() {
			$scope.pause();
		});
	});
}]);

// keep track of audio element
// fetch NPR listings
app.controller('RelatedController', ['$scope', function(){
	
}]);