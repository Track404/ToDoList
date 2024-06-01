import createtoDoItems from "./createItem";
import saveData from "./saveData";
import { formatISO } from "date-fns";
export default function AddNewTasks(allProject) {
  const taskTitle = document.querySelector("#title");
  const taskDueDate = document.querySelector("#dueDate");
  const taskPriority = document.querySelector("#priority");
  const taskDescription = document.querySelector("#description");
  const chooseProject = document.querySelector("#chooseProject");

  let toDoItem = new createtoDoItems(
    taskTitle.value,
    taskDescription.value,
    taskDueDate.value,
    taskPriority.value
  );

  //loop true all project and choose the project that what selected
  for (let i = 0; i < allProject.length; i++) {
    if (chooseProject.value == allProject[i].name) {
      allProject[i].list.push(toDoItem);
    }
  }
  saveData(allProject);
}
