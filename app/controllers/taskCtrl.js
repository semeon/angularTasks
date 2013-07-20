function TaskCtrl($scope) {

  $scope.chevronClick = function (task) {
    console.log('* chevron.click: ' + task.title);
    task.isExpanded = !task.isExpanded;
  }

}
