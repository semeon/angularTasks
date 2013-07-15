var appModule = angular.module('appModule', ['ngCookies']);


appModule.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
      when('/welcome', {templateUrl: 'views/welcome.html',   controller: AuthCtrl}).
      when('/main', {templateUrl: 'views/main.html',   controller: MainCtrl}).
      otherwise({controller: MainCtrl});
      // otherwise({redirectTo: '/welcome'});

}]);

