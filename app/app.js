var appModule = angular.module('appModule', ['ngCookies']);


appModule.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
      when('/welcome', {templateUrl: 'app/views/welcome.html',   controller: AuthCtrl}).
      when('/main', {templateUrl: 'app/views/main.html',   controller: MainCtrl}).
      otherwise({controller: MainCtrl});
      // otherwise({redirectTo: '/welcome'});

}]);

