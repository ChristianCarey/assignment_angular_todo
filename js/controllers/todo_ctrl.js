ToDo.controller('ToDoCtrl', ['$scope', 'todoService',
  function($scope, todoService) {
    

    $scope.formData = {};
    $scope.formData.dueDate = new Date();
    $scope.hideCompleted = false;
    $scope.orderOption = 'dueDate';
    $scope.orderReverse = false;

    $scope.addToDo = function(newToDo) {
      var todo = ({
        text: $scope.formData.text,
        dueDate: $scope.formData.dueDate,
        completed: false
      })
      todoService.addToDo(todo);
      $scope.formData.text = "";
      newToDo.$setPristine();
    }

    $scope.removeToDo = function($index) {
      todoService.removeToDo($index);
    }

    $scope.toggleHideCompleted = function() {
      var $button = $('#hide-completed');
      $scope.hideCompleted = !$scope.hideCompleted;
      var buttonText = $scope.hideCompleted ? "Show Completed" : "Hide completed";
      $button.text(buttonText);
    }

    $scope.getToDos = function() {
      return todoService.getToDos();
    }

    $scope.clearAllCompleted = function() {
      todoService.clearAllCompleted();
    }

    $scope.orderByDueDate = function() {
      if ($scope.orderOption === "dueDate") {
        $scope.orderReverse = !$scope.orderReverse;
      } else {
        $scope.orderReverse = false;
        $scope.orderOption = 'dueDate';
      }
    }

    $scope.orderByCompleted = function() {
      if ($scope.orderOption === "completed") {
        $scope.orderReverse = !$scope.orderReverse;
      } else {
        $scope.orderReverse = true;
        $scope.orderOption = 'completed';
      }
    }

    $scope.arrow = function(columnName) {
      if ($scope.orderOption === columnName) {
        return $scope.orderReverse ? '\u2191' : '\u2193';
      }
    }
  }
]);
