import CreateList from "./createList";

export default function addInput(list) {
  const projectName = document.querySelector("#projectName");

  let toDoList = new CreateList(projectName.value);

  list.push(toDoList);

  console.log(list);
}
