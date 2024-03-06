class Project {
    constructor(title){
        this.title = title;
        this.status = false;
        this.type = 'project';
        this.items = [];
    }

    setTitle(x) {
        this.title = x;
    }

    toggleStatus() {
        this.status = !this.status;
    }

    addTask(item) {
        this.items.push(item);
    }

    deleteTask(index) {
        this.items.splice(index,1);
    }

}

export default Project;