'use strict';

angular.module('myApp.home', [])

.controller('HomeCtrl', ['$window', '$scope','$rootScope', function ($window, $scope, $rootScope) {
    $scope.bibleOpen = function () {
        openLink('000000086472');
    };

    $scope.lazorsOpen = function () {
        openLink('000000090674');
    };

    $scope.footballOpen = function () {
        openLink('000000086304');
    };

    $scope.captainOpen = function () {
        openLink('000000089387');
    };


    $scope.calcOpen = function () {
        openLink('000000089386');
    };

    function openLink(appId) {
        $window.open(
            'tizenstore://ProductDetail/'+appId, '_blank'
        );
    }
}]);