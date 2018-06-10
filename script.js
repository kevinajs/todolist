var todoList = {
	todos: [],
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
			});
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
	},
	toggleCompleted: function(position) {
		this.todos[position].completed = !this.todos[position].completed;
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
	}

};

var handlers = {
	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	changeTodo: function() {
		var changeTodoPosition = document.getElementById('changeTodoPosition');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoTextInput.value);
		changeTodoPosition.value = '';
		changeTodoTextInput.value = '';
		view.displayTodos();
	},
	deleteTodo: function(position) {
		todoList.deleteTodo(position);
		view.displayTodos();
	},
	toggleCompleted: function() {
		var toggleCompletedPosition = document.getElementById('toggleCompletedPosition');
		todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
		toggleCompletedPosition.value = ''
		view.displayTodos();
	},
		toggleAll: function() {
		todoList.toggleAll();
		view.displayTodos();
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

			todoLi.id = i;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}
	},
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	}
};

var todosUl = document.querySelector('ul');

todosUl.addEventListener('click', function(e) {
	console.log(e.target.parentNode.id);

	// get the element that was clicked on.
	var elementClicked = e.target;

	// check if element clicked is a delete button.
	if (elementClicked.className === 'deleteButton') {
		//Run handlers.deleteTodo(position)
		handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
	}
})







