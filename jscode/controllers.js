// Welcome page controller
// -----------------------------------------------------
function AppCtrl($scope, AppSettings, AppState, $cookies, $location, $log) {

  $log.info('');
  $log.info('Controller started: ' + 'AppCtrl');

  $scope.sys = AppSettings.sys;
  $scope.auth = AppSettings.auth;

  $log.info('- accessToken: ' + $scope.auth.accessToken);

  $scope.state = AppState;

  // Logged In
  // -----------------------------------
    if ($scope.auth.accessToken) {

      // $cookies.myCookie = '11111';
      $scope.state.loggedIn = true;

      $log.info('- logged in:' + $scope.state.loggedIn);

      if ($location.path()!='/main') {
        $log.info('- redirecting to /main');
        // $location.path('/main'); 

      } else {
        $log.info('- /main');
      }


  // Not Logged In
  // -----------------------------------
    } else {
      $log.info('- not logged in');

      if ($location.path()!='/welcome') {
        $log.info('- redirecting to /welcome');
        $location.path('/welcome'); 
      }
    }
}

// Auth page controller
// -----------------------------------------------------
function AuthCtrl($scope, AppSettings, $location, $log) {
  $scope.sys = AppSettings.sys;
  $scope.auth = AppSettings.auth;

  $log.info('');
  $log.info('Controller started: ' + 'AuthCtrl');

  $log.info('- accessToken: ' + $scope.auth.accessToken);

  $scope.login = function() {
    $log.info('- login started...');

    var requestUri = '';
    requestUri = requestUri + $scope.auth.requestUriBase + '?';
    requestUri = requestUri + 'client_id=' + $scope.auth.clientId + '&';
    requestUri = requestUri + 'redirect_uri=' + $scope.auth.redirectUri + '&';
    requestUri = requestUri + 'response_type=' + $scope.auth.responseType + '&';
    requestUri = requestUri + 'scope=' + $scope.auth.scope + '&';
    // requestUri = requestUri + '&state='' + authModel.state + '&';
    $log.info('- requestUri: ' + requestUri);

    window.location.href = requestUri;

  }
}


// Auth page controller
// -----------------------------------------------------
function MainCtrl($scope, AppSettings, $log) {
  $scope.sys = AppSettings.sys;
  $scope.auth = AppSettings.auth;

  $log.info('');
  $log.info('Controller started: ' + 'MainCtrl');

}
