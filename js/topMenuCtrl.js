angular
    .module('app')
    .controller('topMenuCtrl', [
        '$scope', '$location', '$window', function ($scope, $location, $window) {
            'use strict';

            function currentLanguage() {
                return $location.path().split('/')[1];
            }

            $scope.menuClass = function (page) {
                var current = $location.path().substring(4);
                return page === current ? 'active' : '';
            };

            $scope.changeLanguage = function () {
                var language = currentLanguage() === 'en' ? 'ru' : 'en';
                //$window.location = '/' + language;
                $location.path('/' + language);
            };

            $scope.menuUrl = function () {
                var language = currentLanguage();
                return '/include/' + language + '/topmenu.html';
            };
        }
    ]);
