var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'flash', 'ngStorage',
    //main modules
     'dashboard']);


app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider, $modalInstance) {



    
    //IdleScreenList
    $stateProvider
       .state('app', {
           url: '/app',
           templateUrl: 'app/common/app.html',
           controller: 'appCtrl',
           controllerAs: 'vm',
           data: {
               pageTitle: 'Login'
           }
       });

    //$urlRouterProvider.otherwise('login');

    $urlRouterProvider.otherwise('/app/dashboard');

    
}]);

// set global configuration of application and it can be accessed by injecting appSettings in any modules
app.constant('appSettings', appConfig);
