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
