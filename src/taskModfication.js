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
          content.innerHTML = `<div>Name: ${
            allMyProject[i].list[index].title
          }</div>
            <div>DueDate: ${format(
              allMyProject[i].list[index].dueDate,
              "MM/dd/yyyy 'at' H:mm"
            )}</div>
            <div>Priority: ${allMyProject[i].list[index].priority}</div>
            <div> Description: ${allMyProject[i].list[index].description}</div>
            
            `;

          break;
        } else if (projectTitle.textContent == "allTasks") {
          content.innerHTML = `<div>Name: ${
            allMyProject[list].list[index].title
          }</div>
            <div>DueDate: ${format(
              allMyProject[list].list[index].dueDate,
              "MM/dd/yyyy 'at' H:mm"
            )}</div>
            <div>Priority: ${allMyProject[list].list[index].priority}</div>
            <div> Description: ${
              allMyProject[list].list[index].description
            }</div>
            
            `;

          break;
        }
      }

      contentDialog.showModal();
    });
  });
}
