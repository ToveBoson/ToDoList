// KLASSER
class Checklist {
  constructor(checklistName) {
    this.checklistName = checklistName;
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

//LOOP FÖR CHECKLISTA
for (let i = 0; i < todoList.length; i++) {
  const listItem = document.createElement("li");
  const buttonContainer = document.createElement("div");
  const checkButton = document.createElement("button");
  const trashButton = document.createElement("button");

  listItem.className = "list";
  listItem.innerHTML = todoList[i].checklistName;

  checkButton.className = "list__check";
  trashButton.className = "list__trash";

  checkButton.innerHTML = todoList[i].checkButton;
  trashButton.innerHTML = todoList[i].trashButton;

  container.appendChild(listItem);
  listItem.appendChild(buttonContainer);
  buttonContainer.appendChild(checkButton);
  buttonContainer.appendChild(trashButton);
}

bigcontainer.append(container);

const todoButton = document.getElementById("todoButton");
todoButton.addEventListener("click", addTodo);

function addTodo(event) {
  container.innerHTML = "";

  const newInput = document.getElementById("todoInput").value;
  const newItem = new Checklist(newInput);
  todoList.push(newItem);

  for (let i = 0; i < todoList.length; i++) {
    const listItem = document.createElement("li");
    const buttonContainer = document.createElement("div");
    const checkButton = document.createElement("button");
    const trashButton = document.createElement("button");

    listItem.className = "list";
    listItem.innerHTML = todoList[i].checklistName;

    checkButton.className = "list__check";
    trashButton.className = "list__trash";

    checkButton.innerHTML = todoList[i].checkButton;
    trashButton.innerHTML = todoList[i].trashButton;

    container.appendChild(listItem);
    listItem.appendChild(buttonContainer);
    buttonContainer.appendChild(checkButton);
    buttonContainer.appendChild(trashButton);

    event.preventDefault();
  }
  bigcontainer.appendChild(container);
}
