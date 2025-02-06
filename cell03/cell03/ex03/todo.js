document.addEventListener("DOMContentLoaded", loadTodos);

function newTodo() {
    let task = prompt("Enter a new TO DO:");
    if (task) {
        addTodo(task, true);
        saveTodos();
    }
}

function addTodo(task, isNew = false) {
    let list = document.getElementById("ft_list");
    let newTask = document.createElement("div");
    newTask.className = "todo";
    newTask.textContent = task;
    newTask.onclick = function () {
        removeTodo(newTask);
    };
    
    if (isNew) {
        list.prepend(newTask);
    } else {
        list.appendChild(newTask);
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
    document.querySelectorAll(".todo").forEach(todo => {
        todolist.push(todo.textContent);
    });
    localStorage.setItem("todolist", JSON.stringify(todolist))
}

function loadTodos() {
    let storedTodos = localStorage.getItem("todolist");
    if (storedTodos) {
        let todolist = JSON.parse(storedTodos);
        todolist.forEach(task => addTodo(task, false));
    }
}
