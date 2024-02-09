import Task from "./todo.js";

class Project extends Task {
    constructor(title, description, dueDate, priority, notes) {
        super(title, description, dueDate, priority, notes);
        this.status = false;
        this.items = [];
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

    showAll() {
        return this.items;
    }

    addProject(name) {
        const project = new Project(name);
        this.items.push(project);
        return project;
    }

    deleteProject(index) {
        this.items.splice(index, 1);
        return `Project at index ${index} deleted...`;
    }

    showItem(index) {
        return this.items[index];
    }

}

export default Project;