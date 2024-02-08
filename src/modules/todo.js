class Task {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.status = false;
    }

    changeTitle(title) {
        this.title = title;
    }

    changeDescription(description) {
        this.description = description;
    }

    changeDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    changePriority(priority) {
        this.priority = priority;
    }

    changeNotes(notes) {
        this.notes = notes;
    }

    completeTask() {
        this.status = true;
    }

}

export default Task;