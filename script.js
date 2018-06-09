var todoList = {
	todos: [],
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
			});
		view.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		view.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		view.displayTodos();
	},
	toggleCompleted: function(position) {
		this.todos[position].completed = !this.todos[position].completed;
		view.displayTodos();
	},
	toggleAll: function() {
		var totalTodos = this.todos.length
		var completedTodos = 0;

		for(var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true){
				completedTodos++;
			}
		}

		if (completedTodos === totalTodos) {
			//if all todos are completed, change them all to uncompleted.
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			} 
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}		
		}
		view.displayTodos();
	}

};

var handlers = {
	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
	},
	changeTodo: function() {
		var changeTodoPosition = document.getElementById('changeTodoPosition');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoTextInput.value);
		changeTodoPosition.value = '';
		changeTodoTextInput.value = '';
	},
	deleteTodo: function() {
		var deleteTodoPosition = document.getElementById('deleteTodoPosition');
		todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
		deleteTodoPosition.value = '';
	},
	toggleCompleted: function() {
		var toggleCompletedPosition = document.getElementById('toggleCompletedPosition');
		todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
		toggleCompletedPosition.value = ''
	},
		toggleAll: function() {
		todoList.toggleAll();
	}
};

var view = {
	displayTodos: function() {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		for (var i = 0; i < todoList.todos.length; i++) {
			var todoLi = document.createElement('li');
			var todoTextWithCompletion = '';
			var todo = todoList.todos[i];

			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}

			todoLi.textContent = todoTextWithCompletion;
			todosUl.appendChild(todoLi);
		}
	}
};






