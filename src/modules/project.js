import Task from "./todo.js";

class Project extends Task {
    constructor(title, description, dueDate, priority, notes) {
        super(title, description, dueDate, priority, notes);
        this.items = [];
    }

    edittitle(title) {
        this.title = title;
        return title;
    }

    createTask(title, description, dueDate, priority, notes) {
        item = new Task(title, description, dueDate, priority, notes);
        this.items.push(item);
        return item;
    };

    deleteTask(index) {
        this.items.splice(index, 1);
        return `Task at index ${index} deleted...`;
    }

    showItems() {
        return this.items;
    }

}

export default Project;