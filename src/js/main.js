import { Checklist } from "./models/checklist";

const firstcheck = new Checklist("Träna");
const secondcheck = new Checklist("Skriva uppsats");
const thirdcheck = new Checklist("Städa");
const fourthcheck = new Checklist("Gå ut med hunden");
const fifthcheck = new Checklist("Tvätta");

let todoList = [firstcheck, secondcheck, thirdcheck, fourthcheck, fifthcheck];

const bigcontainer = document.getElementById("list");

const container = document.createElement("ul");
container.className = "container";

bigcontainer.append(container);

function removeTodo(i) {
  todoList.splice(i, 1);
  localStorage.setItem("Items", JSON.stringify(todoList));
  forLoop(todoList);
}

function forLoop(todoList) {
  container.innerHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const listItem = document.createElement("li");
    const buttonContainer = document.createElement("div");
    const checkButton = document.createElement("button");
    const trashButton = document.createElement("button");

    listItem.className = "list completed";
    listItem.innerHTML = todoList[i].checklistName;

    checkButton.className = "list__check";
    trashButton.className = "list__trash";

    trashButton.addEventListener("click", () => removeTodo(i));

    listItem.classList.toggle("completed");
    checkButton.addEventListener("click", () => {
      todoList[i].done = true;
      listItem.classList.toggle("completed");
    });

    const trashElement = document.createElement("i");
    trashElement.classList.add("bi");
    trashElement.classList.add("bi-trash");
    trashButton.append(trashElement);

    const checkElement = document.createElement("i");
    checkElement.classList.add("bi");
    checkElement.classList.add("bi-check2");
    checkButton.append(checkElement);

    container.appendChild(listItem);
    listItem.appendChild(buttonContainer);
    buttonContainer.appendChild(checkButton);
    buttonContainer.appendChild(trashButton);
  }
}

const todoButton = document.getElementById("todoButton");
todoButton.addEventListener("click", addTodo);

function addTodo(event) {
  container.innerHTML = "";
  const newInput = document.getElementById("todoInput").value;
  const newItem = new Checklist(newInput);
  todoList.push(newItem);
  localStorage.setItem("Items", JSON.stringify(todoList));
  forLoop(todoList);

  event.preventDefault();
}

window.addEventListener("load", () => {
  const newList = JSON.parse(localStorage.getItem("Items"));

  if (newList) {
    todoList = newList;
  }
  forLoop(todoList);
});
