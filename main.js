const inputDiv = document.querySelector(".inputDiv");
const inputTask = document.getElementById("inputTask");
const addTodoButton = document.getElementById("addTodoButton");
const contentDiv = document.querySelector(".contentDiv");
const clearTodo = document.getElementById("clearTasks");
const searchInput = document.getElementById("search");

addTodoButton.addEventListener("click", function (e) {
  if (inputTask.value == "") {
    alert("Lütfen Değer Giriniz!!");
  } else {
    var paragraph = document.createElement("p");
    var deleteButton = document.createElement("div");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "x";
    paragraph.innerText = inputTask.value;
    contentDiv.appendChild(paragraph);
    paragraph.appendChild(deleteButton);
    e.preventDefault();
  }
  deleteButton.addEventListener("click", function () {
    contentDiv.removeChild(paragraph);
  });

  clearTodo.addEventListener("click", function () {
    paragraph.remove();
  });

  searchInput.addEventListener("keyup", searchTodo);
  function searchTodo(e) {
    const text = e.target.value.toLowerCase();
    const allItem = document.querySelectorAll("p");
    for (let task of allItem) {
      const item = task.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    }
  }
});
