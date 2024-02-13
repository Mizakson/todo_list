import Project from "./modules/project.js"
import Task from "./modules/todo.js"
import pageOnLoad from "./modules/interface.js";

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
            render();
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

function render() {
    
}


function emptyDefaultProjects() {
    PROJECTS.length = 0;
}

function init() {
    pageOnLoad();
    buttonEvents();
    render();
}

init();
