import CreateList from "./createList";

export default function createtoDoItems(
  title,
  description,
  dueDate,
  priority,
  notes
) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
}

createtoDoItems.prototype = CreateList.prototype;
