function MainCtrl($scope, AppSettings, $log, $http) {

 	$scope.sys = AppSettings.sys;
	$scope.auth = AppSettings.auth;
	$scope.api = AppSettings.api;

	$log.info('');
	$log.info('Controller started: ' + 'MainCtrl');

	$scope.loadProjects = function() {
		$log.info('- starting projects load');
		$log.info('- request uri: ' + $scope.api.projectsRequestUri);

		$http.jsonp($scope.api.projectsRequestUri, 
					{params: {access_token: $scope.auth.accessToken}}
					);
	}


	$scope.start = function() {
		$scope.loadProjects();
	}


	$scope.start();


}
