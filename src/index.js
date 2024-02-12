import Project from "./modules/project.js"
import Task from "./modules/todo.js"
import pageOnLoad from "./modules/interface.js";

const PROJECTS = [];
const DEFAULT_PROJECT = new Project('default','default project','N/A','N/A','edit');

PROJECTS.push(DEFAULT_PROJECT);

DEFAULT_PROJECT.createTask('task1','first task','4/4/26','low','edit');
console.log(PROJECTS);
console.log(DEFAULT_PROJECT.items[0]);

// add button events

function init() {
    pageOnLoad();
}

init();
