var app = angular.module('gratefulDead', ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/',
        {controller: 'SimpleController',
        templateUrl: 'partials/view1.html'
        })
        .when('/cat',
        {controller: 'SimpleController',
        templateUrl: 'partials/view2.html'
        })
        .when('/dog',
        {controller: 'SimpleController',
        templateUrl: 'partials/view2.html'
        })
        .otherwise({ redirectTo: '/' });
        $locationProvider.hashPrefix('');
});
