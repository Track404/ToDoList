import deleteButton from "./deleteButton";
import taskModification from "./taskModfication";
import { format } from "date-fns";

export default function displayTaskProject(allMyProject, index) {
  const headerTasks = document.querySelector("#contentTask");
  headerTasks.innerHTML = "";
  for (let i = 0; i < allMyProject[index].list.length; i++) {
    const alltasks = document.querySelector("#contentTask");
    const newDiv = document.createElement("div");
    const deleteButton = document.createElement("button");
    const expandButton = document.createElement("button");
    newDiv.classList.add("contentDiv");
    expandButton.classList.add("expandButton");
    expandButton.setAttribute("data-number", i);
    deleteButton.classList.add("deleteButton");
    deleteButton.setAttribute("data-number", i);
    deleteButton.textContent = "Delete";
    expandButton.textContent = "Edit";
    if (allMyProject[index].list[i].dueDate == "") {
      newDiv.innerHTML = `<div>${allMyProject[index].list[i].title}</div><div>No Date</div><div>${allMyProject[index].list[i].priority}</div>`;
    } else {
      newDiv.innerHTML = `<div>${
        allMyProject[index].list[i].title
      }</div><div>${format(
        allMyProject[index].list[i].dueDate,
        "MM/dd/yyyy 'at' H:mm"
      )}</div><div>${allMyProject[index].list[i].priority}</div>`;
    }

    alltasks.appendChild(newDiv);
    newDiv.appendChild(deleteButton);
    newDiv.appendChild(expandButton);
  }
  deleteButton(allMyProject);
  taskModification(allMyProject);
}
