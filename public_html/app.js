/**
 * Created by yc on 11/17/2015.
 */
var myApp = angular.module('myApp',[]);

myApp.controller('MainController', ['$scope',function($scope){
    $scope.webs = [
        {
            "name": "Bootstrip Website",
            "image":"images/BootstripSite.PNG",
            "time": 'Nov 22, 2015',
            "link": "webs/Animation/bootstripSite/index.html"

        },
        {
            "name": "Fill Color",
            "image":"images/fillcolor.PNG",
            "time": 'Nov 18, 2015',
            "link": "webs/Animation/addColor/index.html"

        },
        {
            "name": "AngularJS Weather",
            "image": "images/weather.png",
            "time": "Nov 1, 2015",
            "link": "webs/JQuaryProject/weather/index.html"
        },
        {
            "name": "Bolt Network",
            "image": "images/boltNetwork.png",
            "time": "Oct 13, 2015",
            "link": "webs/AngularJSProject/BoltNetwork2/index.html"
        },
        {
            "name": "Calendar",
            "image": "images/calendar.png",
            "time": "Oct 10, 2015",
            "link": "webs/AngularJSProject/calendar/index.html"
        },
        {
            "name": "Outbox",
            "image": "images/outbox.png",
            "time": "Oct 8, 2015",
            "link": "webs/AngularJSProject/outbox2/index.html"
        },
        {
            "name": "Reader",
            "image": "images/reader.png",
            "time": "Oct 6, 2015",
            "link": "webs/AngularJSProject/reader/index.html"
        },
        {
            "name": "Armando Perez",
            "image": "images/ArmandoPerez.png",
            "time": "Oct 4, 2015",
            "link": "webs/JQuaryProject/ArmandoPerez/index.html"
        },
        {
            "name": "Bonsai",
            "image": "images/bonsai.png",
            "time": "Oct 2, 2015",
            "link": "webs/JQuaryProject/bonsai/index.html"
        },
        {
            "name": "Feedster",
            "image": "images/feedster.png",
            "time": "Oct 1, 2015",
            "link": "webs/JQuaryProject/feedster/index.html"
        },
        {
            "name": "Forecast",
            "image": "images/forecast.png",
            "time": "Seq 28, 2015",
            "link": "webs/JQuaryProject/forecast/index.html"
        },
        {
            "name": "Game Board",
            "image": "images/gameboard.png",
            "time": "Seq 27, 2015",
            "link": "webs/JQuaryProject/gameBoard/index.html"
        },
        {
            "name": "List Easy",
            "image": "images/listEasy.png",
            "time": "Seq 26, 2015",
            "link": "webs/JQuaryProject/listEasy/index.html"
        },
        {
            "name": "Madison Square Market",
            "image": "images/madisonSquareMarket.png",
            "time": "Seq 24, 2015",
            "link": "webs/JQuaryProject/MadisonSquareMarket/index.html"
        },
        {
            "name": "Milford School",
            "image": "images/milfordSchool.png",
            "time": "Seq 22, 2015",
            "link": "webs/JQuaryProject/MilfordSchool/index.html"
        },
        {
            "name": "Move",
            "image": "images/move.png",
            "time": "Seq 20, 2015",
            "link": "webs/JQuaryProject/move/index.html"
        },
        {
            "name": "Move Gear",
            "image": "images/movegear.png",
            "time": "Seq 19, 2015",
            "link": "webs/JQuaryProject/moveGear/index.html"
        },
        {
            "name": "Pocket Book",
            "image": "images/pocketbook.png",
            "time": "Seq 17, 2015",
            "link": "webs/JQuaryProject/pocketbook/index.html"
        },
        {
            "name": "Speak Easy",
            "image": "images/listEasy.png",
            "time": "Seq 15, 2015",
            "link": "webs/JQuaryProject/speakEasy/index.html"
        }
        /*
        {
            "name": "Threadly",
            "image": "images/5.PNG",
            "time": "Oct 1, 2015",
            "link": "webs/JQuaryProject/threadly/index.html"
        }
        */

    ];
}]);


