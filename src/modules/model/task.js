import Project from "./project";

class Task extends Project {
    constructor(title, description, dueDate, priority) {
        super(title);
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = false;
        this.type = 'task';
    }
}

export default Task;