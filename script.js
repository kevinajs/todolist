var todoList = {
	todos: [],
	displayTodos: function() {
		console.log("My todos: ");
		if (this.todos.length === 0){
			console.log("Todo List is Empty!");
		} else {
			for (var i = 0; i < this.todos.length; i++){
				if (this.todos[i].completed === true){
					console.log("(x)", this.todos[i].todoText);
				} else {
					console.log("( )", this.todos[i].todoText);
				}
			}
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
			});
		this.displayTodos(this.todos);
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos(this.todos);
	},
	deleteTodo: function(position) {
		this.todos.splice(position);
		this.displayTodos(this.todos);
	},
	toggleCompleted: function(position) {
		this.todos[position].completed = !this.todos.completed;
		this.displayTodos(this.todos);
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
		this.displayTodos(this.todos);
	}

};

var displayTodosButton = document.getElementById("displayTodosButton");
var toggleAllButton = document.getElementById("toggleAllButton");

displayTodosButton.addEventListener('click', function() {
	todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
	todoList.toggleAll();
});





