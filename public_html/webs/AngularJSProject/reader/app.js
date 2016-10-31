/**
 * Created by yc on 11/14/2015.
 */
var myApp = angular.module('ReaderApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
        .when('/books', {
            templateUrl: 'views/bookshelf.html',
            controller: 'BookshelfController'
        })
        .when('/books/:id', {
            templateUrl: 'views/book.html',
            controller: 'BookController'
        })

        .when('/books/:id/chapters/:chapter', {
            templateUrl: 'views/chapter.html',
            controller: 'ChapterController'
        })

        .otherwise({
            redirectTo: '/books'
        });
});

myApp.factory('books',['$http', function($http){
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/books-api/books.json')
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        })
}]);

myApp.controller('BookshelfController', ['$scope', 'books','$routeParams', function($scope, books, $routeParams){
    books.success(function(data){
        $scope.books = data;
    });
}]);

myApp.controller('BookController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams){
    books.success(function(data){
        $scope.book = data[$routeParams.id];
        $scope.currentBookIndex = parseInt($routeParams.id);
    });
}]);


myApp.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams){
    books.success(function(data){
        $scope.book = data[$routeParams.id];
        $scope.chapter = $scope.book.chapters[$routeParams.chapter];
        $scope.currentBookIndex = parseInt($routeParams.id);
        $scope.currentChapterIndex = parseInt($routeParams.chapter);

        var nextIndex = $scope.currentChapterIndex +1;
        if(nextIndex >= $scope.book.chapters.length)$scope.nextChapterIndex='#';
        else $scope.nextChapterIndex = nextIndex;

        var preIndex = $scope.currentChapterIndex - 1;
        if(preIndex < 0) $scope.preChapterIndex='#';
        else $scope.preChapterIndex = preIndex;
    });
}]);




