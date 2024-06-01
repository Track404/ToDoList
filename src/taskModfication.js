import { format } from "date-fns";

export default function taskModification(allMyProject) {
  const taskModification = document.querySelectorAll(".expandButton");
  const contentDialog = document.querySelector("#contentDialog");

  taskModification.forEach((div) => {
    div.addEventListener("click", () => {
      const content = document.querySelector("#expandContent");
      let index = div.dataset.number;
      let list = div.dataset.list;
      for (let i = 0; i < allMyProject.length; i++) {
        if (projectTitle.textContent == allMyProject[i].name) {
          content.innerHTML = `<div>${allMyProject[i].list[index].title}</div>
            <div>${allMyProject[i].list[index].dueDate}</div>
            <div>${allMyProject[i].list[index].priority}</div>
            <div>${allMyProject[i].list[index].description}</div>
            
            `;

          break;
        } else if (projectTitle.textContent == "allTasks") {
          content.innerHTML = `<div>${allMyProject[list].list[index].title}</div>
            <div>${allMyProject[list].list[index].dueDate}</div>
            <div>${allMyProject[list].list[index].priority}</div>
            <div>${allMyProject[list].list[index].description}</div>
            
            `;

          break;
        }
      }

      contentDialog.showModal();
    });
  });
}
