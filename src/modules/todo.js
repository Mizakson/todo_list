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
        return title;
    }

    changeDescription(description) {
        this.description = description;
        return description;
    }

    changeDueDate(dueDate) {
        this.dueDate = dueDate;
        return dueDate;
    }

    changePriority(priority) {
        this.priority = priority;
        return priority;
    }

    changeNotes(notes) {
        this.notes = notes;
        return notes;
    }

    completeTask() {
        this.status = true;
        return this.status;
    }

    toggleTask() {
        this.status = false;
        return this.status;
    }

}

export default Task;