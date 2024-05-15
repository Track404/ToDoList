import createtoDoItems from "./items";
import CreateList from "./list";

let items = new createtoDoItems(
  "the one",
  "yes",
  "01/02/2024",
  "High",
  "best thing to do"
);
let toDoList = new CreateList("big project");

console.log(items);
toDoList.addToList(items);
console.log(toDoList.list);
