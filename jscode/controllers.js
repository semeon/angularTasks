function WelcomeCtrl($scope, AppSettings) {

  console.log('Controller: ' + 'WelcomeCtrl');

  // $scope.sys = AppSettings.sys;
  // $scope.auth = AppSettings.auth;

  // $scope.proceed = function() {
  //   if ($scope.sys.logging) {
  //     console.log($scope.auth.clientId);
  //   }
  // }


}

function AuthCtrl($scope, AppSettings, $location) {
  $scope.sys = AppSettings.sys;
  $scope.auth = AppSettings.auth;

  console.log('Controller: ' + 'AuthCtrl');

  var fakeUrl = 'http://host/?' + $location.path().substr(1);
  var urlAccToken = $.url(fakeUrl).param('access_token');   
  console.log('urlAccToken: ' + urlAccToken);


  $scope.loginStatusMsg = 'Not Logged In';

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


function MainCtrl($scope, AppSettings) {
  $scope.sys = AppSettings.sys;
  $scope.auth = AppSettings.auth;

  console.log('Controller: ' + 'MainCtrl');


}
