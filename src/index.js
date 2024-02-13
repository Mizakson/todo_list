import Project from "./modules/project.js"
import Task from "./modules/todo.js"
import * as ui from "./modules/interface.js";

const PROJECTS = [];
const DEFAULT_PROJECT = new Project('default','default project description','8/8/28','low','default project notes');

PROJECTS.push(DEFAULT_PROJECT);

DEFAULT_PROJECT.createTask('task1','first task','4/4/26','low','edit');

// add button events

function clearBody() {
    const content = document.querySelector('#display');
    content.innerHTML = '';
}

function buttonEvents() {
    document.addEventListener("click", function(e) {
        const target = e.target.closest("#home");
        if(target) {
            clearBody();
            ui.default.render(PROJECTS);
            console.log(PROJECTS);
        }
    })
    // document.addEventListener("click", function(e) {
    //     const target = e.target.closest("#add");
    //     if (target) {
    //         showTaskForm();
    //     }
    // })

    document.addEventListener("click", function(e) {
        const target = e.target.closest("#clear");
        if(target) {
            clearBody();
            emptyDefaultProjects();
            console.log(PROJECTS);
        }
    })
}


function emptyDefaultProjects() {
    PROJECTS.length = 0;
}

function init() {
    ui.default.pageOnLoad();
    buttonEvents();
    ui.default.render(PROJECTS);
}

init();
