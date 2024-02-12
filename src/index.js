import Project from "./modules/project.js"
import Task from "./modules/todo.js"
import pageOnLoad from "./modules/interface.js";

const PROJECTS = [];
const DEFAULT_PROJECT = new Project('default','default project','N/A','N/A','edit');

PROJECTS.push(DEFAULT_PROJECT);

DEFAULT_PROJECT.createTask('task1','first task','4/4/26','low','edit');

// add button events

function buttonEvents() {
    document.addEventListener("click", function(e) {
        const target = e.target.closest("#home");
        if(target) {
            console.log('home btn clicked');
        }
    })
}

function init() {
    pageOnLoad();
    buttonEvents();
}

init();
