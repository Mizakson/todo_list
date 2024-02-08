import Project from "./modules/project"

class initialProject extends Project {
    constructor() {
        super(this.items);
    }

    addProject() {
        const project = new Project();
        this.items.push(project);
        return project;
    }

    deleteProject(index) {
        this.items.splice(index, 1);
        return `Project at index ${index} deleted...`;
    }

};

export default initialProject;