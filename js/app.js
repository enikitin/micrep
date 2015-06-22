(function () {
    'use strict';

    var urlPrefix = '#!/';

    angular
        .module('app', ['ngRoute'])
        .constant('url', {
            home: urlPrefix + '',
            partners: urlPrefix + 'partners',
            contact: urlPrefix + 'contact',
            russian: urlPrefix + 'ru',
            ru: {
                partners: urlPrefix + 'ru/partners'
            }
        })
        .config([
            '$locationProvider', function($locationProvider) {
                $locationProvider.hashPrefix('!');
                //$locationProvider.html5Mode(true);
            }
        ])
        .config([
            '$routeProvider', function($routeProvider) {
                $routeProvider
                    .when('/', { templateUrl: 'html/home.html' })
                    .when('/partners', { templateUrl: 'html/partners.html' })
                    .when('/contact', { templateUrl: 'html/contact.html' })
                    .when('/ru', { templateUrl: 'html/ru/home.html' })
                    .when('/ru/partners', { templateUrl: 'html/ru/partners.html' })
                    .otherwise({ redirectTo: '/' });
            }
        ]);
})();