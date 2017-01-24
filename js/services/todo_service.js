ToDo.factory('todoService', function() {
  var _todos = [{
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

  var addToDo = function(newToDo) {
    _todos.push(newToDo)
  }

  var removeToDo = function($index) {
    _todos.splice($index, 1); 
  }

  var clearAllCompleted = function() {
    var uncompleted = [];
    _todos.forEach(function(todo) {
      if (!todo.completed) {
        uncompleted.push(todo);
      }
    });
    angular.copy(uncompleted, _todos);
  }

  var getToDos = function() {
    return _todos;
  }

  return {
    addToDo: addToDo,
    removeToDo: removeToDo,
    clearAllCompleted: clearAllCompleted,
    getToDos: getToDos
  }
});