import createtoDoItems from "./createItem";
import CreateList from "./createList";
import allProject from "./displayAllProject";
import addInput from "./addNewProject";
import displayAllTasks from "./displayAllTasks";
import AddNewTasks from "./addNewTask";
import "normalize.css";
import "./style.css";
import DisplayAllProject from "./displayAllProject";
import updateProject from "./updateProject";
import displayTaskProject from "./displayTaskProject";

let items = new createtoDoItems(
  "the one",
  "yes",
  "01/02/2024",
  "High",
  "best thing to do"
);

const allMyProject = [];
//boiler plate template to show whats happenning on page
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

//All const to interact with the DOM
const allTasks = document.querySelector("#allTasks");
const projectDialog = document.querySelector("#projectDialog");
const taskDialog = document.querySelector("#taskDialog");
const showButtonProject = document.querySelector("#createProject");
const showButtonTask = document.querySelector("#createTask");
const closeBtnProject = document.querySelector("#closeBtnProject");
const closeBtnTask = document.querySelector("#closeBtnTask");

allProject(allMyProject);
displayAllTasks(allMyProject);
updateProject(allMyProject);
// Button to open dialog
showButtonProject.addEventListener("click", () => {
  projectDialog.showModal();
});

showButtonTask.addEventListener("click", () => {
  const select = document.querySelector("#chooseProject");
  // show and update the dropdown project list
  select.innerHTML = "";
  for (let i = 0; i < allMyProject.length; i++) {
    let option = allMyProject[i].name;
    let element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    select.appendChild(element);
  }

  taskDialog.showModal();
});

// button to close the dialog and use the data from the form
closeBtnProject.addEventListener("click", (event) => {
  let form = document.querySelector("#formProject");
  event.preventDefault();

  addInput(allMyProject);
  DisplayAllProject(allMyProject);
  updateProject(allMyProject);
  projectDialog.close();
  form.reset();
});

closeBtnTask.addEventListener("click", (event) => {
  let form = document.querySelector("#formTask");
  const projectTitle = document.querySelector("#projectTitle");
  event.preventDefault();
  AddNewTasks(allMyProject);
  for (let i = 0; i < allMyProject.length; i++) {
    if (projectTitle.textContent == allMyProject[i].name) {
      displayTaskProject(allMyProject, i);
      break;
    } else if (projectTitle.textContent == "allTask") {
      alert("yes");
      displayAllTasks(allMyProject);
      break;
    }
  }

  //addTaskProject(allMyProject);

  taskDialog.close();
  form.reset();
});

//show the all task tab

allTasks.addEventListener("click", () => {
  displayAllTasks(allMyProject);
});
