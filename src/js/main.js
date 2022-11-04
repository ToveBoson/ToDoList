class Checklist {
  constructor(workout, writeEssay, clean, dogwalking, laundry) {
    this.workout = workout;
    this.writeEssay = writeEssay;
    this.clean = clean;
    this.dogwalking = dogwalking;
    this.laundry = laundry;
  }
}

let firstcheck = new Checklist("workout");
let secondcheck = new Checklist("writeEssay");
let thirdcheck = new Checklist("clean");
let fourthcheck = new Checklist("dogwalking");
let fifthcheck = new Checklist("laundry");

let todoList = ["workout", "writeEssay", "clean", "dogwalking", "laundry"];

let container = document.getElementById("container");
for (let i = 0; i < todoList.length; i++) {}
