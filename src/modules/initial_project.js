import Project from "./project.js"

class initialProject {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    addProject(name) {
        const project = new Project(name);
        this.items.push(project);
        return project;
    }

    deleteProject(index) {
        this.items.splice(index, 1);
        return `Project at index ${index} deleted...`;
    }

    showProject(index) {
        return this.items[index];
    }

};

export default initialProject;