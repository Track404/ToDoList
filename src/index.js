import createtoDoItems from "./createItem";
import CreateList from "./createList";
import allProject from "./displayAllProject";
import addInput from "./addNewProject";
import displayAllTasks from "./displayAllTasks";
import AddNewTasks from "./addNewTask";
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

let toDoList = new CreateList("Inbox");
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

const projectDialog = document.querySelector("#projectDialog");
const taskDialog = document.querySelector("#taskDialog");
const showButtonProject = document.querySelector("#createProject");
const showButtonTask = document.querySelector("#createTask");
const closeBtnProject = document.querySelector("#closeBtnProject");
const closeBtnTask = document.querySelector("#closeBtnTask");

// Le bouton "Afficher la fenêtre" ouvre le dialogue
showButtonProject.addEventListener("click", () => {
  projectDialog.showModal();
});

showButtonTask.addEventListener("click", () => {
  const select = document.querySelector("#chooseProject");
  // show and update the dropdown project list
  select.innerHTML = "";
  for (let i = 0; i < allMyProject.length; i++) {
    let opt = allMyProject[i].name;
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }

  taskDialog.showModal();
});

// Le bouton "Fermer" ferme le dialogue
closeBtnProject.addEventListener("click", (event) => {
  let form = document.querySelector("#formProject");
  event.preventDefault();

  addInput(allMyProject);
  DisplayAllProject(allMyProject);
  projectDialog.close();
  form.reset();
});

closeBtnTask.addEventListener("click", (event) => {
  let form = document.querySelector("#formTask");
  event.preventDefault();

  AddNewTasks(allMyProject);
  displayAllTasks(allMyProject);
  taskDialog.close();
  form.reset();
});

allProject(allMyProject);
displayAllTasks(allMyProject);
