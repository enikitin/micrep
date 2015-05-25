angular
    .module('app')
    .controller('topMenuCtrl', [
        '$scope', '$location', '$window', function ($scope, $location) {
            'use strict';

            function isRussian() {
                return $location.path().substr(0, 3) === '/ru';
            }

            $scope.menuClass = function (page) {
                var itemStart = isRussian() ? 4 : 1;
                var current = $location.path().substring(itemStart);
                return page === current ? 'active' : '';
            };

            $scope.menuUrl = function () {
                var infix = isRussian() ? 'ru/' : '';
                return '/include/' + infix + 'topmenu.html';
            };
        }
    ]);
