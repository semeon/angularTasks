function MainCtrl($scope, AppSettings, gTasksApi, $log, $http) {

 	$scope.sys = AppSettings.sys;
	$scope.auth = AppSettings.auth;
	$scope.api = gTasksApi;

	$log.info('');
	$log.info('Controller started: ' + 'MainCtrl');

	$scope.loadProjects = function() {
		$log.info('- starting projects load');
		$log.info('- request uri: ' + $scope.api.projectsRequestUri);

		// $http.jsonp($scope.api.projectsRequestUri, 
		// 			{params: {access_token: $scope.auth.accessToken}}
		// 			);

		$scope.api.requestProjects();

	}

	var aaa = function (data) {
		$log.info('--------------');
		$log.info(data);
		$log.info('--------------');
	}

	$scope.start = function() {
		$scope.loadProjects(aaa);
	}


	$scope.start();
}
