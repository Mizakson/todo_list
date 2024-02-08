import Task from "./todo.js";

class Project {
    constructor() {
        this.items = [];
    }

    addTask() {
        item = new Task();
        this.items.push(item);
        return item;
    }

    deleteTask(index) {
        this.items.splice(index, 1);
        return `Task at index ${index} deleted...`;
    }

    showItems() {
        return this.items;
    }

}

export default Project;