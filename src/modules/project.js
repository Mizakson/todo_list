import Task from "./todo.js";

class Project {
    constructor() {
        this.items = [];
    }

    addTask(item) {
        item = new Task();
        this.items.push(item);
    }

    deleteTask(item) {
        const index = this.items[item];
        this.items.splice(index, 1);
    }

    showItems() {
        return this.items;
    }

}