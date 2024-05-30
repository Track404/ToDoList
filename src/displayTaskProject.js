import deleteButton from "./deleteButton";
import { format } from "date-fns";

export default function displayTaskProject(allMyProject, index) {
  const headerTasks = document.querySelector("#contentTask");
  headerTasks.innerHTML = "";
  for (let i = 0; i < allMyProject[index].list.length; i++) {
    const alltasks = document.querySelector("#contentTask");
    const newDiv = document.createElement("div");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.setAttribute("data-number", i);
    deleteButton.textContent = "Delete";
    newDiv.innerHTML = `${allMyProject[index].list[i].title},${format(
      allMyProject[index].list[i].dueDate,
      "MM/dd/yyyy 'at' H:m"
    )}`;

    alltasks.appendChild(newDiv);
    newDiv.appendChild(deleteButton);
  }
  deleteButton(allMyProject);
}
