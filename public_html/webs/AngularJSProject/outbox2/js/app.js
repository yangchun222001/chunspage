/**
 * Created by yc on 11/13/2015.
 */
var myApp = angular.module('OutboxApp', ['ngRoute']);

myApp.factory('emailData', ['$http', function($http){
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/emails-api/emails.json')
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });

}]);

myApp.controller('HomeController', ['$scope', 'emailData',function($scope, emailData){
    emailData.success(function(data){
        $scope.emails = data;
    })
}]);


myApp.controller('EmailController',['$scope','emailData','$routeParams', function($scope, emailData, $routeParams){
    emailData.success(function(data){
        $scope.email = data[$routeParams.id];
    })
}]);


myApp.config(function($routeProvider){
    $routeProvider
        .when('/outbox',{
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/outbox/:id', {
            controller: 'EmailController',
            templateUrl: 'views/emails.html'
        })
        .otherwise({
            redirectTo: '/outbox'
        });
});
