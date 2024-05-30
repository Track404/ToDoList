export default function saveData(allMyProject) {
  localStorage.removeItem("toDoList");
  localStorage.setItem("toDoList", JSON.stringify(allMyProject));
}

export function getData(allMyProject) {
  allMyProject = JSON.parse(localStorage.getItem("toDoList"));
}
