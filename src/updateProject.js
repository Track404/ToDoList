import displayTaskProject from "./displayTaskProject";

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
    });
  });
}
