class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = false;
        this.type = 'task';
    }

    editTitle(x) {
        this.title = x;
    }

    editDescription(x) {
        this.description = x;
    }

    editDueDate(x) {
        this.dueDate = x;
    }

    editPriority(x) {
        this.priority = x;
    }

    toggleStatus() {
        this.status = !this.status;
    }

}

export default Task;