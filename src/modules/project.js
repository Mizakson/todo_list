// project class and methods

import Task from "./task";

class Project extends Task {
    constructor(name, description, dueDate, priority, notes) {
        super(name, description, dueDate, priority, notes);
        this.type = 'project';
        this.items = [];
    }
};

export default Project;