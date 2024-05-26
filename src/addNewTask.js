import createtoDoItems from "./createItem";

export default function AddNewTasks(list) {
  const taskTitle = document.querySelector("#title");
  const taskDueDate = document.querySelector("#dueDate");
  const taskPriority = document.querySelector("#priority");
  const taskDescription = document.querySelector("#description");
  const headerTasks = document.querySelector("#headerContent");

  let toDoList = new createtoDoItems(
    taskTitle.value,
    taskDescription.value,
    taskDueDate.value,
    taskPriority.value
  );
  headerTasks.innerHTML = "";
  list.addToList(toDoList);
}
