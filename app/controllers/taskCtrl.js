function TaskCtrl($scope) {

	console.log('');
	console.log('Controller started: ' + 'TaskCtrl');

	$scope.chevronClick = function (task) {
		console.log('* chevron.click: ' + task.title);
		task.isExpanded = !task.isExpanded;
	}

}
