const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoListUl = document.querySelector(".todo-list-ul");
const closeBtn = document.querySelector(".close-btn");


document.addEventListener( 'keyup', event => {
  if( event.code === 'Enter' ) 
    if (todoInput.value !== "") {
      const todo = document.createElement("li");
      todo.innerHTML = todoInput.value;
      todoListUl.append(todo);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      todo.appendChild(span);
      todoInput.value = "";
    } else {  
      alert("Enter task");
    }
});



todoListUl.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
})


closeBtn.addEventListener("click", () => {
  for (let i = 0; i < todoListUl.children.length; i++) {
    if (todoListUl.children[i].classList.contains("checked")) {
      todoListUl.children[i].remove();
      i--;
    }
  }
})






