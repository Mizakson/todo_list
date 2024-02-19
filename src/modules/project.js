import Task from "./task.js";

class Project extends Task {
    constructor(title, description, dueDate, priority, notes) {
        super(title, description, dueDate, priority, notes);
        this.type = 'project';
        this.items = [];
        this.status = false;
    };



};

export default Project;