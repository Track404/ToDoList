import CreateList from "./createList";
import saveData from "./saveData";
export default function addInput(list) {
  const projectName = document.querySelector("#projectName");
  const projectColor = document.querySelector("#projectColor");

  let toDoList = new CreateList(projectName.value, projectColor.value);

  list.push(toDoList);
  saveData(list);

  console.log(list);
}
