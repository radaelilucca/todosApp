var containerElement = document.querySelector("div.todosContainer");

var buttonElement = document.querySelector("button");

var inputElement = document.querySelector("input");

var todos = JSON.parse(localStorage.getItem("listTodos")) || [];

buttonElement.onclick = addTodo;

inputElement.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("botao").click();
  }
});

renderTodos();

function renderTodos() {
  containerElement.innerHTML = "";
  var listElement = document.createElement("ul");
  containerElement.appendChild(listElement);

  for (todo of todos) {
    var pos = todos.indexOf(todo);
    var listItem = document.createElement("li");
    var todoText = document.createTextNode(todo);

    listItem.appendChild(todoText);
    listElement.appendChild(listItem);

    var deletLink = document.createElement("a");

    deletLink.setAttribute("href", "#");
    deletLink.setAttribute("id", "delButton");
    deletLink.setAttribute("onclick", "deleteTodos( " + pos + " )");

    var textLink = document.createTextNode("Deletar");

    deletLink.appendChild(textLink);
    listItem.appendChild(deletLink);
  }
}

function addTodo() {
  var todoText = document.querySelector("input").value;

  todos.push(todoText);
  renderTodos();
  inputElement.value = " ";
  saveToStorage();
}

function deleteTodos(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("listTodos", JSON.stringify(todos));
}
