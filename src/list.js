export default function CreateList(name) {
  this.name = name;
  this.list = [];
}

CreateList.prototype.addToList = function (items) {
  this.list.push(items);
};
