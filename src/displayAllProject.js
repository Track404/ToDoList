export default function DisplayAllProject(allMyProject) {
  const allProject = document.querySelector("#project");
  allProject.innerHTML = "";
  for (let i = 0; i < allMyProject.length; i++) {
    const alltasks = document.querySelector("#project");
    const newColor = document.createElement("div");
    const newDiv = document.createElement("div");

    newColor.classList.add("projectColor");
    newDiv.classList.add("projectSelection");
    newColor.setAttribute("data-color", i);
    newDiv.setAttribute("data-index", i);
    newDiv.textContent = allMyProject[i].name;
    newColor.style.background = allMyProject[i].color;

    newDiv.appendChild(newColor);
    alltasks.appendChild(newDiv);
  }
}
