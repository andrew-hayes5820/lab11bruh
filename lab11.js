var app = angular.module('myModule',['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/',
        {controller: 'SimpleController',
        templateUrl: 'view1.html'
        })
        .when('/cat',
        {controller: 'SimpleController',
        templateUrl: 'view2.html'
        })
        .when('/dog',
        {controller: 'SimpleController',
        templateUrl: 'view2.html'
        })
        .otherwise({ redirectTo: '/' });
        $locationProvider.hashPrefix('');
});
