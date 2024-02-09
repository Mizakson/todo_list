import Task from "./todo.js";

class Project extends Task {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    editName(name) {
        this.name = name;
        return name;
    }

    addTask(item) {
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