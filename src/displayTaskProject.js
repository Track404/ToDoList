import deleteButton from "./deleteButton";

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
    newDiv.innerHTML = `${allMyProject[index].list[i].title},${allMyProject[index].list[i].dueDate}`;

    alltasks.appendChild(newDiv);
    newDiv.appendChild(deleteButton);
  }
  deleteButton(allMyProject);
}
