export default function displayAllTasks(allTasks) {
  for (let i = 0; i < allTasks.length; i++) {
    for (let j = 0; j < allTasks[i].list.length; j++) {
      const alltasks = document.querySelector("#headerContent");
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `${allTasks[i].list[j].title},${allTasks[i].list[j].dueDate}`;

      alltasks.appendChild(newDiv);
    }
  }
}
