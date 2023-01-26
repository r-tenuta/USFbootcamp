document.addEventListener("DOMContentLoaded", function() {
    let todoForm = document.getElementById("todo-form");
    let todoList = document.getElementById("todo-list");
  
    todoForm.addEventListener("submit", function(event) {
      event.preventDefault();

      let newTodo = document.createElement("li");
      newTodo.innerText = document.getElementById("new-todo").value;
  
      let removeButton = document.createElement("button");
      removeButton.innerText = "Delete";
  
      todoList.appendChild(newTodo);
      newTodo.appendChild(removeButton);
  
      todoForm.reset();
    });
  
    todoList.addEventListener("click", function(e){
        if (e.target.tagName === "LI"){
            e.target.style.textDecoration = "line-through";
        }
        else if (e.target.tagName === "BUTTON") {
            e.target.parentNode.remove();
        }
    })
  });