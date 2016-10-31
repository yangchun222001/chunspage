/**
 * Created by yc on 11/13/2015.

 */

var myApp = angular.module('myApp', ['ngRoute']);





myApp.controller('home', ['$scope',function($scope){
    $scope.data = "home";
}]);

myApp.controller('guest', ['$scope',function($scope){
    $scope.data = "guest";
}]);

myApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'home'
        })
        .when('/guest', {
            templateUrl: 'guest.html',
            controller: 'guest'
        });
});



