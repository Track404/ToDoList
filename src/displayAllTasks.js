import deleteButton from "./deleteButton";

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
      deleteButton.classList.add("deleteButton");
      deleteButton.setAttribute("data-list", i);
      deleteButton.setAttribute("data-number", j);
      deleteButton.textContent = "Delete";
      newDiv.innerHTML = `${allTasks[i].list[j].title},${allTasks[i].list[j].dueDate}`;

      alltasks.appendChild(newDiv);
      newDiv.appendChild(deleteButton);
    }
  }
  deleteButton(allTasks);
}
