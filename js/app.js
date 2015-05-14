angular
    .module('app', ['ngRoute'])
    .config([
        '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            'use strict';

            $locationProvider.hashPrefix('!');
            
            $routeProvider
                .when('/en', { templateUrl: 'include/en/home.html' })
                .when('/en/about', { templateUrl: 'include/en/about.html' })
                .when('/en/partners', { templateUrl: 'include/en/partners.html' })
                .when('/en/contact', { templateUrl: 'include/en/contact.html' })
                .when('/ru', { templateUrl: 'include/ru/home.html' })
                .when('/ru/partners', { templateUrl: 'include/ru/partners.html' })
                .otherwise({ redirectTo: '/en' });
        }
    ]);