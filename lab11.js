var app = angular.module('myModule',['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/',
        {controller: 'SimpleController',
        templateUrl: 'index.html'
        })
        .when('/cat',
        {controller: 'SimpleController',
        templateUrl: 'item1.html'
        })
        .when('/dog',
        {controller: 'SimpleController',
        templateUrl: 'item2.html'
        })
        .otherwise({ 
            redirectTo: '/' 
        });

        $locationProvider.hashPrefix('');

        app.controller('AppController', function(){

        }
});
