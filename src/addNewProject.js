import CreateList from "./createList";
import saveData from "./saveData";
export default function addInput(list) {
  const projectName = document.querySelector("#projectName");

  let toDoList = new CreateList(projectName.value);

  list.push(toDoList);
  saveData(list);

  console.log(list);
}
