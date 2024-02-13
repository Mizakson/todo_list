class Task {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.type = 'task';
        this.status = false;
    };

    testMethod() {
        return 'test';
    };

};

export default Task;