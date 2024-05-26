import createtoDoItems from "./createItem";
import CreateList from "./createList";
import allProject from "./displayAllProject";
import addInput from "./createNewproject";
import displayAllTasks from "./displayAllTasks";
import "normalize.css";
import "./style.css";
import DisplayAllProject from "./displayAllProject";

let items = new createtoDoItems(
  "the one",
  "yes",
  "01/02/2024",
  "High",
  "best thing to do"
);

const allMyProject = [];

let toDoList = new CreateList(" project 1");
let toDoList1 = new CreateList("big project 2");
let toDoList2 = new CreateList("big project 3");
let toDoList3 = new CreateList("big project 4");

toDoList.addToList(items);
toDoList1.addToList(items);
toDoList2.addToList(items);
toDoList.addToMyProject(allMyProject, toDoList);
toDoList1.addToMyProject(allMyProject, toDoList1);
toDoList2.addToMyProject(allMyProject, toDoList2);
toDoList3.addToMyProject(allMyProject, toDoList3);

const dialog = document.querySelector("dialog");
const showButtonProject = document.querySelector("#createProject");
const closeButton = document.querySelector("dialog button");

// Le bouton "Afficher la fenêtre" ouvre le dialogue
showButtonProject.addEventListener("click", () => {
  dialog.showModal();
});

// Le bouton "Fermer" ferme le dialogue
closeButton.addEventListener("click", () => {
  addInput(allMyProject);
  DisplayAllProject(allMyProject);
  dialog.close();
});

allProject(allMyProject);
displayAllTasks(allMyProject);
