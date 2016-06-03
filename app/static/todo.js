<<<<<<< HEAD
angular.module('todoApp', [])
      .controller('TodoListController', function() {
	              var todoList = this;
		              todoList.todos = [
	                {text:'learn angular', done:true},
                {text:'build an angular app', done:false},
      		{text:'Bench 2 plates', done:false}];
           
              todoList.addTodo = function() {
		                todoList.todos.push({text:todoList.todoText, done:false});
				          todoList.todoText = '';
					          };
	           
	              todoList.remaining = function() {
			                var count = 0;
					          angular.forEach(todoList.todos, function(todo) {
							              count += todo.done ? 0 : 1;
								                });
						            return count;
							            };
		           
		              todoList.archive = function() {
				                var oldTodos = todoList.todos;
						          todoList.todos = [];
							            angular.forEach(oldTodos, function(todo) {
									                if (!todo.done) todoList.todos.push(todo);
											          });
								            };
			            });


=======
angular.module('todoApp', [])
      .controller('TodoListController', function() {
	              var todoList = this;
		              todoList.todos = [
	                {text:'learn angular', done:true},
                {text:'build an angular app', done:false},
      		{text:'Bench 2 plates', done:false}];
           
              todoList.addTodo = function() {
		                todoList.todos.push({text:todoList.todoText, done:false});
				          todoList.todoText = '';
					          };
	           
	              todoList.remaining = function() {
			                var count = 0;
					          angular.forEach(todoList.todos, function(todo) {
							              count += todo.done ? 0 : 1;
								                });
						            return count;
							            };
		           
		              todoList.archive = function() {
				                var oldTodos = todoList.todos;
						          todoList.todos = [];
							            angular.forEach(oldTodos, function(todo) {
									                if (!todo.done) todoList.todos.push(todo);
											          });
                                  alert("On to the next one!")  //adding encouragement
								            };
			            });
//function congrat() {
//    alert("Congratulations you finished a task!" );  //congratulating user for finishing task
//};


//Should add a function to make sure that if the add filed is empty then the user get's an alert to fill the field
>>>>>>> bc9d9d0344abd772a64279fa8d2f599251f25d22
