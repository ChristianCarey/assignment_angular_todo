ToDo.controller('ToDoCtrl', ['$scope',
  function($scope) {
    $scope.item =

    $scope.items = [{
      text: 'Get grocieries from the store',
      dueDate: new Date(),
      completed: false
    }, {
      text: 'Go get a haircut or something',
      dueDate: new Date(),
      completed: true
    }, {
      text: 'Dont not go get a haircut',
      dueDate: new Date(),
      completed: false
    }];

  }
]);
