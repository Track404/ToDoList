export default function DisplayAllProject(allMyProject) {
  for (let i = 0; i < allMyProject.length; i++) {
    const alltasks = document.querySelector("#project");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("data-index", i);
    newDiv.textContent = allMyProject[i].name;

    alltasks.appendChild(newDiv);
  }
}
