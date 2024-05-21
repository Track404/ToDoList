import DisplayAllProject from "./displayAllProject";
import CreateList from "./createList";

export default function addInput(list) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("addInput");
  const alltasks = document.querySelector("#project");
  const input = '<input  type="text" id="name">';
  newDiv.innerHTML = input;

  alltasks.appendChild(newDiv);

  alltasks.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      const name = document.querySelector("#name");
      let toDoList = new CreateList(name.value);
      list.push(toDoList);
      console.log(list);
      alltasks.innerHTML = "";
      DisplayAllProject(list);
    }
  });
}

//newDiv.innerHTML = name.value;
//alltasks.appendChild(newDiv);
