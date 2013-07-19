function MainCtrl($scope, AppSettings, gTasksApi, $log, $http) {

	console.log('');
	console.log('Controller started: ' + 'MainCtrl');

	$scope.taskGroupTemplate = 'app/views/_taskGroup.html';
	$scope.taskTreeTemplate = 'app/views/_taskTree.html';

 	$scope.sys = AppSettings.sys;
	$scope.auth = AppSettings.auth;
	$scope.api = gTasksApi;

	// $scope.projects = {};
	$scope.projects = [];


	// Functions: Task pane
	// ---------------------------------
		$scope.projectClick = function (project) {
			console.log('- project clicked: ' + project.title);
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
			console.log('- project clicked: ' + project.title);
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
			console.log('** AJAX REQUEST **');
			console.log('- starting projects load');
			console.log('- request uri: ' + $scope.api.projectsRequestUri);

			// Response processor
			// -----------------------------------------------
				var processTaskList = function (data, project) {
					console.log('** AJAX RESPONSE **');
					console.log('- Task list request answered, project: ' + project.title);
					console.log(data);

					if (data.items) {      
						project.addTasks(data.items);

					} else if (data.error) {
						// dataLoadErrorOccured = true;
						// pageController.processDataLoadError(data.error);
					} else {
						// dataLoadErrorOccured = true;
						// pageController.processDataLoadError();
					}

					console.log('===================');
					console.log(project);
					console.log('===================');
				}

			// Request
			// -----------------------------------------------
			    $scope.api.requestTasks(project, processTaskList);
		}


		$scope.loadProjects = function() {
			console.log('** AJAX REQUEST **');
			console.log('- starting projects load');
			console.log('- request uri: ' + $scope.api.projectsRequestUri);

			// Response processor
			// -----------------------------------------------
				var processProjects = function (data) {
					console.log('** AJAX RESPONSE **');
					console.log('- Projects list request answered');
					console.log(data);

		            if (data.items) {
		                var items = data.items; 
		                for (var i = 0; i < items.length; i++) {
		                    // PROJECT CREATED HERE
		                    var project = new Project(items[i]);
		                    console.log('- creating new project: ' + project.title);
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
			// 		console.log('--------------');
			// 		console.log(data);
			// 		console.log('--------------');
			// 	}
			// );
		}

	// Body
	// ---------------------------------
		
		$scope.start();


}
