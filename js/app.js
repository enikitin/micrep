angular
    .module('app', ['ngRoute'])
    .config([
        '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            'use strict';

            $locationProvider.hashPrefix('!');
            
            $routeProvider
                .when('/', { templateUrl: 'html/home.html' })
                .when('/partners', { templateUrl: 'html/partners.html' })
                .when('/contact', { templateUrl: 'html/contact.html' })
                .when('/ru', { templateUrl: 'html/ru/home.html' })
                .when('/ru/partners', { templateUrl: 'html/ru/partners.html' })
                .otherwise({ redirectTo: '/' });
        }
    ]);