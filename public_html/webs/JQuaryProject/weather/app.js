var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//service
weatherApp.service('cityService', function(){
    this.city = "New York, NY";
});

//controller
weatherApp.controller('homeController', ['$scope','cityService', function($scope, cityService){
    $scope.city = cityService.city;

    $scope.$watch('city', function(){
       cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forecastController',['$scope', '$resource','cityService', '$routeParams', function($scope, $resource, cityService, $routeParams){
    $scope.city = cityService.city;
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?appid=2de143494c0b295cca9337e1e96b00e0", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    $scope.day = $routeParams.days || '2';
    $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt: $scope.day});

    $scope.convertDate = function(date){
        return new Date(date*1000);
    };

    $scope.convertTemp = function(degK){
        return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
}]);

//route
weatherApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:days',{
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
});

//directives
weatherApp.directive("weatherDetail", function(){
    return{
        restrict: 'E',
        templateUrl: 'directives/weatherDetail.html',
        replace: true,
        scope: {
            weather: "=",
            convertTemp: "&",
            convertDate: "&"

        }
    };
});


