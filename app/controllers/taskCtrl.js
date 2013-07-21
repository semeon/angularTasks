function TaskCtrl($scope) {

	console.log('');
	console.log('Controller started: ' + 'TaskCtrl');

	$scope.chevronClick = function (task, $event) {
		console.log('* chevronClick: ' + task.title);
		task.isExpanded = !task.isExpanded;
		// $event.stopPropagation();
	}

	$scope.taskNameClick = function (task) {
		console.log('* taskNameClick: ' + task.title);
		console.log(task);
		// task.isSelected = !task.isSelected;
	}

	$scope.taskEditClick = function (task) {
		console.log('* taskEditClick: ' + task.title);
	}

	$scope.taskDeleteClick = function (task) {
		console.log('* taskDeleteClick: ' + task.title);
	}

	$scope.checkboxClick = function (task) {
		console.log('* taskDeleteClick: ' + task.title);
		task.isCompleted = !task.isCompleted; 		
	}

}
