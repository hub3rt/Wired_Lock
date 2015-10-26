angular.module('starter.controllers', ['starter.services'])
.controller('SessionsCtrl', function($scope, Session) {
    $scope.sessions = Session.query();
})