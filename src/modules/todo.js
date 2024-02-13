class Todo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.type = 'task';
    };

};

class Project extends Todo {
    constructor(title, description, dueDate, priority, notes) {
        super(title, description, dueDate, priority, notes);
        this.type = 'project';
        this.items = [];
    };
    
}