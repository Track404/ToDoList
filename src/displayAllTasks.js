import deleteButton from "./deleteButton";
import taskModification from "./taskModfication";
import { format } from "date-fns";

export default function displayAllTasks(allTasks) {
  const headerTasks = document.querySelector("#contentTask");
  const projectTitle = document.querySelector("#projectTitle");
  projectTitle.textContent = "allTasks";
  headerTasks.innerHTML = "";
  for (let i = 0; i < allTasks.length; i++) {
    for (let j = 0; j < allTasks[i].list.length; j++) {
      const alltasks = document.querySelector("#contentTask");
      const newDiv = document.createElement("div");
      const deleteButton = document.createElement("button");
      const expandButton = document.createElement("button");
      newDiv.classList.add("contentDiv");
      deleteButton.classList.add("deleteButton");
      expandButton.classList.add("expandButton");
      expandButton.setAttribute("data-list", i);
      expandButton.setAttribute("data-number", j);
      deleteButton.setAttribute("data-list", i);
      deleteButton.setAttribute("data-number", j);
      deleteButton.textContent = "Delete";
      expandButton.textContent = "Edit";
      if (allTasks[i].list[j].dueDate == "") {
        newDiv.innerHTML = `<div>${allTasks[i].list[j].title}</div><div>No Date
          
        </div><div>${allTasks[i].list[j].priority}</div>`;
      } else {
        newDiv.innerHTML = `<div>${
          allTasks[i].list[j].title
        }</div><div>${format(
          allTasks[i].list[j].dueDate,
          "MM/dd/yyyy 'at' H:mm"
        )}</div><div>${allTasks[i].list[j].priority}</div>`;
      }

      alltasks.appendChild(newDiv);
      newDiv.appendChild(deleteButton);
      newDiv.appendChild(expandButton);
    }
  }
  deleteButton(allTasks);
  taskModification(allTasks);
}
