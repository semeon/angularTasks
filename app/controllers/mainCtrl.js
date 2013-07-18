function MainCtrl($scope, AppSettings, gTasksApi, $log, $http) {

	$log.info('');
	$log.info('Controller started: ' + 'MainCtrl');

 	$scope.sys = AppSettings.sys;
	$scope.auth = AppSettings.auth;
	$scope.api = gTasksApi;

	// $scope.projects = {};
	$scope.projects = [];

	// Functions: Task pane
	// ---------------------------------
		$scope.projectClick = function (project) {
			$log.info('- project clicked: ' + project.title);
			project.isSelected = !project.isSelected;

			if (project.isSelected) {
				project.cssClass = 'active';	
			} else {
				project.cssClass = '';	
			}
		}


	// Functions: Project lsit
	// ---------------------------------
		$scope.projectClick = function (project) {
			$log.info('- project clicked: ' + project.title);
			project.isSelected = !project.isSelected;

			if (project.isSelected) {
				project.cssClass = 'active';
				$scope.loadTasks(project);
			} else {
				project.cssClass = '';	
			}
		}

	// Functions: Data
	// ---------------------------------

		$scope.loadTasks = function(project) {
			$log.info('** AJAX REQUEST **');
			$log.info('- starting projects load');
			$log.info('- request uri: ' + $scope.api.projectsRequestUri);

			// Response processor
			// -----------------------------------------------
				var processTaskList = function (data, project) {
					$log.info('** AJAX RESPONSE **');
					$log.info('- Task list request answered, project: ' + project.title);
					$log.info(data);

					if (data.items) {      
						project.addTasks(data.items);

					} else if (data.error) {
						// dataLoadErrorOccured = true;
						// pageController.processDataLoadError(data.error);
					} else {
						// dataLoadErrorOccured = true;
						// pageController.processDataLoadError();
					}
				}

			// Request
			// -----------------------------------------------
			    $scope.api.requestTasks(project, processTaskList);
		}


		$scope.loadProjects = function() {
			$log.info('** AJAX REQUEST **');
			$log.info('- starting projects load');
			$log.info('- request uri: ' + $scope.api.projectsRequestUri);

			// Response processor
			// -----------------------------------------------
				var processProjects = function (data) {
					$log.info('** AJAX RESPONSE **');
					$log.info('- Projects list request answered');
					$log.info(data);

		            if (data.items) {
		                var items = data.items; 
		                for (var i = 0; i < items.length; i++) {
		                    // PROJECT CREATED HERE
		                    var project = new Project(items[i]);
		                    $log.info('- creating new project: ' + project.title);
		                    $scope.projects.push(project);
		                    // $scope.projects[project.id] = project;
		                    // $scope.loadTasks(project);
		                }
		                // self.eventHandler.projectListLoaded();

		            } else if (data.error) {
		                // dataLoadErrorOccured = true;
		                // pageController.processDataLoadError(data.error);
		            } else {
		                // dataLoadErrorOccured = true;
		                // pageController.processDataLoadError();
		            }
				}

			// Request
			// -----------------------------------------------
				$scope.api.requestProjects(processProjects);
		}

		$scope.start = function() {
			$scope.loadProjects();

			// $scope.loadProjects(
			// 	function (data) {
			// 		$log.info('--------------');
			// 		$log.info(data);
			// 		$log.info('--------------');
			// 	}
			// );
		}

	// Body
	// ---------------------------------
		
		$scope.start();


}
