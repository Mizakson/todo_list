import Item from "./item.js";

// task class
// tasks can be stored in projects or by themselves

class Task extends Item {
    constructor(name, description, dueDate, priority, notes) {
        super(name, type);
        this.type = 'task';
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
};

export default Task;