// 1. Define a module
// Module: Collection of functions to run when app starts
// 2. Instantiate it in HTML ( ng-app="myApp" )

var app = angular.module('myApp', []);

// anything attached to $scope is available to the view
// anything in app.run() will run before the rest of the app

app.controller('ParentController', function($scope) {
	$scope.person = { greeted: false };
});


app.controller('ChildController', function($scope) {
	$scope.sayHello = function() {
		$scope.person.greeted = true;
	}

	$scope.reset = function() {
		$scope.person.greeted = false;
	}
});
