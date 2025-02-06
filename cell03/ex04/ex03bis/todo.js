$(document).ready(function() {
    loadTodos();

    function newTodo() {
        let task = prompt("Enter a new TO DO:");
        if (task) {
            addTodo(task, true);
            saveTodos();
        }
    }

    function addTodo(task, isNew = false) {
        let list = $("#ft_list");
        let newTask = $("<div>").addClass("todo").text(task).click(function() {
            removeTodo($(this));
        });

        if (isNew) {
            list.prepend(newTask);
        } else {
            list.append(newTask);
        }
        saveTodos();
    }

    function removeTodo(todo) {
        if (confirm("Do you want to remove this TO DO?")) {
            todo.remove();
            saveTodos();
        }
    }

    function saveTodos() {
        let todolist = [];
        $(".todo").each(function() {
            todolist.push($(this).text());
        });
        localStorage.setItem("todolist", JSON.stringify(todolist));
    }

    function loadTodos() {
        let storedTodos = localStorage.getItem("todolist");
        if (storedTodos) {
            let todolist = JSON.parse(storedTodos);
            todolist.forEach(task => addTodo(task, false));
        }
    }

    $("#newTodoButton").click(newTodo);
});
