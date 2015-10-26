angular.module('starter.controllers.dashboard', ['ionic'])
	.controller('DashboardCtrl', ['$scope', '$state' , function($scope,$state) {

	$scope.dash = {};
	$scope.dashlists = [
	{ title: '13h30',
	  content: 'Ouverture principale porte par Nicolas'	 },
	{ title: '15h00',
	  content: 'Fermeture principale porte par Nicolas'	 },
	{ title: '18h45',
	  content: 'Ouverture porte de garage par Nicolas'	 },
	{ title: '18h55',
	  content: 'Fermture porte de garage par Nicolas'	 },
];
$scope.test = 'fack';

	$scope.loginConnection = function(){

		var login = $scope.dash.login;
		var password = $scope.dash.password;
		
		if(login == 'nicolas'){
			$state.go('dashboard',null,{reload:true});
		}else{
			$state.go('tab.dash',null,{reload:true});
		}
	};


	$scope.logout = function(){

		console.log('logout');
	};

	$scope.register = function(){

		console.log('register');
	};


}]);
