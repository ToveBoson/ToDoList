// KLASSER
class Checklist {
  constructor(checklistName) {
    this.checklistName = checklistName;
    this.done = false;
  }
}

function forLoop() {
  for (let i = 0; i < todoList.length; i++) {
    const listItem = document.createElement("li");
    const buttonContainer = document.createElement("div");
    const checkButton = document.createElement("button");
    const trashButton = document.createElement("button");

    listItem.className = "list";
    listItem.innerHTML = todoList[i].checklistName;

    checkButton.className = "list__check";
    trashButton.className = "list__trash";

    trashButton.addEventListener("click", () => {
      const parent = buttonContainer.parentElement;
      parent.parentElement.removeChild(parent);
    });

    // trashButton.addEventListener("click", () => {
    //   listItem.innerHTML =
    // }

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

const firstcheck = new Checklist("Träna");
const secondcheck = new Checklist("Skriva uppsats");
const thirdcheck = new Checklist("Städa");
const fourthcheck = new Checklist("Gå ut med hunden");
const fifthcheck = new Checklist("Tvätta");

const todoList = [firstcheck, secondcheck, thirdcheck, fourthcheck, fifthcheck];

const bigcontainer = document.getElementById("list");

const container = document.createElement("ul");
container.className = "container";

forLoop();

bigcontainer.append(container);

const todoButton = document.getElementById("todoButton");
todoButton.addEventListener("click", addTodo);

function addTodo(event) {
  container.innerHTML = "";

  const newInput = document.getElementById("todoInput").value;
  const newItem = new Checklist(newInput);
  todoList.push(newItem);

  forLoop();

  event.preventDefault();
}
bigcontainer.appendChild(container);

let newItemsfromList = localStorage.getItem("itemlist");

localStorage.setItem("savedItems", JSON.stringify(listItem));
localStorage.setItem("itemlist", JSON.stringify(todoList));
