export default function editButton(allMyProject) {
  const editButton = document.createElement("button");
  const editButtonDiv = document.querySelector("#editBtnDiv");
  const editDialog = document.querySelector("#editDialog");

  editButton.classList.add("editButton");
  editButton.textContent = "Edit";
  editButtonDiv.appendChild(editButton);

  const showEditButton = document.querySelectorAll(".editButton");

  showEditButton.forEach((button) => {
    button.addEventListener("click", () => {
      let index = button.dataset.number;
      let list = button.dataset.list;

      editDialog.showModal();
    });
  });
}
