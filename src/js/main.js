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

  listItem.className = "list";
  listItem.innerHTML = todoList[i].checklistName;

  container.appendChild(listItem);
}

bigcontainer.append(container);
