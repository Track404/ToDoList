export default function CreateList(name) {
  this.name = name;
  this.list = [];
}

CreateList.prototype.addToList = function (items) {
  this.list.push(items);
};

CreateList.prototype.addToMyProject = function (name, list) {
  name.push(list);
};

CreateList.prototype.sortList = function () {
  //sort base on the list of items inside the array
  this.list.sort((a, b) => a.dueDate - b.dueDate);
};
