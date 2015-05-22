angular
    .module('app', ['ngRoute'])
    .config([
        '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            'use strict';

            $locationProvider.hashPrefix('!');
            
            $routeProvider
                .when('/', { templateUrl: 'include/home.html' })
                .when('/partners', { templateUrl: 'include/partners.html' })
                .when('/contact', { templateUrl: 'include/contact.html' })
                .when('/ru', { templateUrl: 'include/ru/home.html' })
                .when('/ru/partners', { templateUrl: 'include/ru/partners.html' })
                .otherwise({ redirectTo: '/' });
        }
    ]);