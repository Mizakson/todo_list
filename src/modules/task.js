// task class
// tasks can be stored in projects or by themselves

class Task {
    constructor(name, description, dueDate, priority, notes) {
        this.name = name;
        this.type = 'task';
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.status = false;
    }

    editName(name) {
        name = this.name;
    }

    toggleStatus() {
        this.status = !this.status;
    }

};

export default Task;