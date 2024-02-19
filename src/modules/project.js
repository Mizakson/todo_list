// project class and methods

import Task from "./task";

class Project extends Task {
    constructor(name, description, dueDate, priority, notes) {
        super(name, description, dueDate, priority, notes);
        this.type = 'project';
        this.items = [];
    }

    additem(item) {
        this.items.push(item);
    }

    deleteItem(index) {
        this.items.splice(index, 1);
    }


};

export default Project;