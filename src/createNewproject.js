import CreateList from "./createList";

export default function addInput(list) {
  const projectName = document.querySelector("#projectName");
  const allProject = document.querySelector("#project");
  let toDoList = new CreateList(projectName.value);
  allProject.innerHTML = "";
  list.push(toDoList);

  console.log(list);
}
