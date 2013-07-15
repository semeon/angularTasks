function AppCtrl($scope, AppSettings, AppState, $cookies, $location, $log) {

  // Constructor
  // ---------------------------

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
          $location.path('/main'); 

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


  // Methods
  // ---------------------------
  $scope.logout = function () {
    // TODO
    window.location.href = $scope.auth.redirectUri;
  }


}