export default function displayTaskProject(allMyProject, index) {
  const headerTasks = document.querySelector("#contentTask");
  headerTasks.innerHTML = "";
  for (let i = 0; i < allMyProject[index].list.length; i++) {
    const alltasks = document.querySelector("#contentTask");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `${allMyProject[index].list[i].title},${allMyProject[index].list[i].dueDate}`;

    alltasks.appendChild(newDiv);
  }
}
