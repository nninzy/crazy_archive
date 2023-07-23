const toDoForm = document.querySelector(".todo__form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo__list");
 
const TODOS_Ls = "toDos";
let toDos = [];
 
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li); 
  const cleanToDos = toDos.filter(function (toDo) { 
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
 
function saveToDos() {
  localStorage.setItem(TODOS_Ls, JSON.stringify(toDos)); 
}
 
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const newId = toDos.length + 1; 
  checkbox.setAttribute("type", "checkbox")
  checkbox.setAttribute("id", `todo__checkbox${newId}`)
  label.setAttribute("for", `todo__checkbox${newId}`)
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  label.innerText = text;
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(delBtn);
  li.id = newId; 
  toDoList.appendChild(li);
  const toDoObj = {
    text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}
 
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
 
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_Ls);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); 
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}
 
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
 
init();