import Task from "./todo.js";

class Project extends Task {
    constructor(title, description, dueDate, priority, notes) {
        super(title, description, dueDate, priority, notes);
        this.status = false;
        this.items = [];
        this.type = 'project';
    }

    createTask(title, description, dueDate, priority, notes) {
        const item = new Task(title, description, dueDate, priority, notes);
        this.items.push(item);
        this.showItem(this.items[item]);
    };

    deleteTask(index) {
        this.items.splice(index, 1);
        return `Task at index ${index} deleted...`;
    }

    showAll() {
        return this.items;
    }

    addProject(title, description, dueDate, priority, notes) {
        const project = new Project(title, description, dueDate, priority, notes);
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

    // auxilary method
    // don't know if necessary
    showSpecificTask(index1, index2) {
        return this.items[index1][index2];
    }

}

export default Project;