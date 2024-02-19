import Item from "./item.js";

// project class and methods

class Project extends Item {
    constructor(name, description, dueDate, priority, notes) {
        super(name, type);
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.items = [];
    }
};

export default Project;