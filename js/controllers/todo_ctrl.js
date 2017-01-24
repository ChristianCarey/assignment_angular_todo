ToDo.controller('ToDoCtrl', ['$scope', '$window', '$filter',
  function($scope, $window, $filter) {
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

    $scope.formData = {};
    $scope.formData.dueDate = new Date();

    $scope.addToDo = function(newToDo) {
      $scope.items.push({
        text: $scope.formData.text,
        dueDate: $scope.formData.dueDate,
        completed: false
      })
      $scope.formData.text = "";
      newToDo.$setPristine();
    }

    $scope.removeToDo = function($index) {
      $scope.items.splice($index, 1); 
    }
  }
]);
