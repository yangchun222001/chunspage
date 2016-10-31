/**
 * Created by yc on 11/13/2015.
 */
var myApp = angular.module('CalendarApp', ['ngRoute']);


myApp.factory('events', function($http){
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/events-api/events.json')
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });
});


myApp.controller('DayController', ['$scope', 'events',function($scope, events){
    events.success(function(data){
       $scope.info = data;
    });

}]);

myApp.controller('EventController', ['$scope', 'events','$routeParams', function($scope, events, $routeParams){
    events.success(function(data){
        $scope.event = data.events[$routeParams.id];
    });
}]);


myApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/day.html',
            controller: 'DayController'
        })
        .when('/:id', {
            templateUrl: 'views/event.html',
            controller: 'EventController'
        })
        .otherwise({
            templateUrl: 'views/day.html',
            controller: 'DayController'
        });
});


