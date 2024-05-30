import displayAllTasks from "./displayAllTasks";
import displayTaskProject from "./displayTaskProject";
import saveData from "./saveData";
export default function deleteButton(allMyProject) {
  const deleteButton = document.querySelectorAll(".deleteButton");
  const projectTitle = document.querySelector("#projectTitle");

  deleteButton.forEach((button) => {
    button.addEventListener("click", () => {
      let index = button.dataset.number;
      let list = button.dataset.list;
      for (let i = 0; i < allMyProject.length; i++) {
        if (projectTitle.textContent == allMyProject[i].name) {
          allMyProject[i].list.splice(index, 1);
          displayTaskProject(allMyProject, i);

          break;
        } else if (projectTitle.textContent == "allTasks") {
          allMyProject[list].list.splice(index, 1);
          displayAllTasks(allMyProject);

          break;
        }
      }
      saveData(allMyProject);
    });
  });
}
