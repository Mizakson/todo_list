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
        this.name = name;
    }

    editDescription(description) {
        this.description = description;
    }

    editDueDate(dueDate) {
        this.dueDate = dueDate
    }

    editPriority(priority) {
        this.priority = priority;
    }

    editNotes(notes) {
        this.notes = notes;
    }

    toggleStatus() {
        this.status = !this.status;
    }

};

export default Task;