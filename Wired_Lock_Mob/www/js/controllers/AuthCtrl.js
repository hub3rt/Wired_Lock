angular.module('app.controllers.auth', []).controller('AuthController', ['$scope', '$location', '$http', 'Auth', 
    function($scope, $location, $http, Auth) {
    $scope.userData = {};
        $scope.loginError = '';
 
    $scope.submitLogin = function() {
        $http.post('/login', this.userData)
        .success(function(user) {
            Auth.setUser(user);
            $location.url('/');
        })
        .error(function(data) {
            $scope.loginError = data.loginError;
        });
    };
}]);