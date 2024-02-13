import Project from "./modules/project.js"
import Task from "./modules/todo.js"
import * as ui from "./modules/interface.js";

const PROJECTS = [];
const DEFAULT_PROJECT = new Project('defaultProj','default project description','8/8/28','low','default project notes');
const DEFAULT_TASK = new Task('defaultTask', 'default task description', '8/8/28','low','default task notes');

PROJECTS.push(DEFAULT_PROJECT);
PROJECTS.push(DEFAULT_TASK);

console.log(PROJECTS);

function buttonEvents() {
    document.addEventListener("click", function(e) {
        const target = e.target.closest("#home");
        if(target) {
            console.log('home btn clicked');
        }
    });

    document.addEventListener("click", function(e) {
        const target = e.target.closest("#add");
        if(target) {
            console.log('add btn clicked');
        }
    });

    document.addEventListener("click", function(e) {
        const target = e.target.closest("#clear");
        if(target) {
            console.log('clear btn clicked');
        }
    });
}

function init() {
    ui.default.pageOnLoad();
    buttonEvents();
};

init();
