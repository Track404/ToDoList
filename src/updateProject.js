import displayAllTasks from "./displayAllTasks";
import displayTaskProject from "./displayTaskProject";

export default function updateProject(allMyProject) {
  const projectSelection = document.querySelectorAll(".projectSelection");

  projectSelection.forEach((div) => {
    div.addEventListener("click", () => {
      const headerTasks = document.querySelector("#contentTask");

      let index = div.dataset.index;

      for (let i = 0; i < projectSelection.length; i++) {
        projectSelection[i].style.background = "white";
        if (div.textContent == allMyProject[i].name) {
          div.style.background = allMyProject[i].color;
        }
      }

      headerTasks.innerHTML = "";
      const projectTitle = document.querySelector("#projectTitle");
      projectTitle.textContent = div.textContent;
      displayTaskProject(allMyProject, index);
    });
  });
}

export function udpateAllTasks(allMyProject) {
  const allTasksSelection = document.querySelector("#allTasks");
  const projectSelection = document.querySelectorAll(".projectSelection");
  allTasksSelection.addEventListener("click", () => {
    const headerTasks = document.querySelector("#contentTask");
    for (let i = 0; i < projectSelection.length; i++) {
      projectSelection[i].style.background = "white";
    }
    headerTasks.innerHTML = "";
    const projectTitle = document.querySelector("#projectTitle");
    projectTitle.textContent = allTasksSelection.textContent;
    displayAllTasks(allMyProject);
  });
}
