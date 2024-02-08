import Task from "./todo.js";

class Project {
    constructor() {
        this.items = [];
    }

    addProject() {
        const newProject = new Project();
        this.items.push(newProject);
        return this.items;
    }

    deleteProject(index) {
        this.items.splice(index, 1);
        return this.items;
    }

    showProjects() {
        return this.items;
    }

}

export default Project;