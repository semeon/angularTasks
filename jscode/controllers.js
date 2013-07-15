
// Welcome page controller
// -----------------------------------------------------
function WelcomeCtrl($scope, AppSettings) {

  console.log('Controller: ' + 'WelcomeCtrl');

  $scope.sys = AppSettings.sys;
  $scope.auth = AppSettings.auth;

  $scope.proceed = function() {
    if ($scope.sys.logging) {
      console.log($scope.auth.clientId);
    }
  }
}


// Auth page controller
// -----------------------------------------------------
function AuthCtrl($scope, AppSettings, $location) {
  $scope.sys = AppSettings.sys;
  $scope.auth = AppSettings.auth;

  if ($scope.sys.logging) {
    console.log('Controller started: ' + 'AuthCtrl');
  }

  if ($scope.sys.logging) {
    console.log('AuthCtrl - accessToken: ' + $scope.auth.accessToken);
  }


  if ($scope.auth.accessToken) {
    $scope.loginStatusMsg = 'You are logged in';

    if ($scope.sys.logging) {
      console.log('Redirecting to /main');
    }
    $location.path('/main'); 

  }


  $scope.login = function() {
    if ($scope.sys.logging) {
      console.log('Login started...');
    }

    var requestUri = '';
    requestUri = requestUri + $scope.auth.requestUriBase + '?';
    requestUri = requestUri + 'client_id=' + $scope.auth.clientId + '&';
    requestUri = requestUri + 'redirect_uri=' + $scope.auth.redirectUri + '&';
    requestUri = requestUri + 'response_type=' + $scope.auth.responseType + '&';
    requestUri = requestUri + 'scope=' + $scope.auth.scope + '&';
    // requestUri = requestUri + '&state='' + authModel.state + '&';

    window.location.href = requestUri;
    // console.log('requestUri: ' + requestUri);

  }
}


// Auth page controller
// -----------------------------------------------------
function MainCtrl($scope, AppSettings) {
  $scope.sys = AppSettings.sys;
  $scope.auth = AppSettings.auth;

  if ($scope.sys.logging) {
    console.log('Controller started: ' + 'MainCtrl');
  }

  if ($scope.sys.logging) {
    console.log('MainCtrl - accessToken: ' + $scope.auth.accessToken);
  }
}
