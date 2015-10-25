angular.module('starter.controllers.dashboard', [])
.controller('DashCtrl', function($scope) {
	$scope.connection = function(login,password){
		console.log('login = ' + $scope.login + ' password = ' + $scope.password);
	};
	
});