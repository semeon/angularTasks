function MainCtrl($scope, AppSettings, $log) {
  $scope.sys = AppSettings.sys;
  $scope.auth = AppSettings.auth;

  $log.info('');
  $log.info('Controller started: ' + 'MainCtrl');

}
