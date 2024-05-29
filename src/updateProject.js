import displayAllTasks from "./displayAllTasks";
import displayTaskProject from "./displayTaskProject";
import deleteButton from "./deleteButton";

export default function updateProject(allMyProject) {
  const projectSelection = document.querySelectorAll(".projectSelection");

  projectSelection.forEach((div) => {
    div.addEventListener("click", () => {
      const headerTasks = document.querySelector("#contentTask");
      let index = div.dataset.index;
      headerTasks.innerHTML = "";
      const projectTitle = document.querySelector("#projectTitle");
      projectTitle.textContent = div.textContent;
      displayTaskProject(allMyProject, index);
      deleteButton(allMyProject);
    });
  });
}

export function udpateAllTasks(allMyProject) {
  const allTasksSelection = document.querySelector("#allTasks");

  allTasksSelection.addEventListener("click", () => {
    const headerTasks = document.querySelector("#contentTask");
    headerTasks.innerHTML = "";
    const projectTitle = document.querySelector("#projectTitle");
    projectTitle.textContent = allTasksSelection.textContent;
    displayAllTasks(allMyProject);
  });
}
