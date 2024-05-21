import createtoDoItems from "./createItem";
import CreateList from "./createList";
import allProject from "./displayAllProject";
import addInput from "./createNewproject";

import "normalize.css";
import "./style.css";

let items = new createtoDoItems(
  "the one",
  "yes",
  "01/02/2024",
  "High",
  "best thing to do"
);

const projectButton = document.querySelector("#createProject");
const allMyProject = [];
let toDoList = new CreateList(" project 1");
let toDoList1 = new CreateList("big project 2");
let toDoList2 = new CreateList("big project 3");
let toDoList3 = new CreateList("big project 4");

console.log(items);
toDoList.addToList(items);
toDoList1.addToMyProject(allMyProject, toDoList1);
toDoList2.addToMyProject(allMyProject, toDoList2);
toDoList3.addToMyProject(allMyProject, toDoList3);

projectButton.addEventListener("click", () => {
  console.log("yes");
  addInput(allMyProject);
});
console.log(allMyProject);
allProject(allMyProject);
