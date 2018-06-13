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

		var completedTodos = 0;
		var totalTodos = this.todos.length;

		this.todos.forEach(function(todo) {
			if (todo.completed === true) {
				completedTodos++;
			}
		})

		this.todos.forEach(function(todo) {
			if (completedTodos === totalTodos) {
				todo.completed = false;
			} else {
				todo.completed = true;
			}
		});
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

		todoList.todos.forEach(function (todo, position){
			var todoLi = document.createElement('li');
			var todoTextWithCompletion = '';
			
			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText; 
			}

			todoLi.id = position;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}, this);
	},
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setupEventListeners: function() {
		var todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function(e) {
			// get the element that was clicked on.
			var elementClicked = e.target;

			// check if element clicked is a delete button.
			if (elementClicked.className === 'deleteButton') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

view.setupEventListeners();




