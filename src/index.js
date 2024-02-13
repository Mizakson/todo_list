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
    const display = document.querySelector('#display');

    for (let i = 0; i < PROJECTS.length; i++) {
        let item = PROJECTS[i];
        if (item.type === 'project') {
            let projectEl = document.createElement('div');
            projectEl.classList.add('project');
            projectEl.innerHTML = `
            <div class='project-header'>
                <h3 class='project-title'>${item.title}</h3>
                <p class='project-dueDate'>${item.dueDate}</p>
            </div>
            <div class='project-info'>
                <p class='project-description'>${item.description}</p>
                <p class='project-priority'>${item.priority}</p>
                <p class='project-notes'>${item.notes}</p>
            </div>
            `
            display.appendChild(projectEl);

        } else if (item.type === 'task') {
            let taskEl = document.createElement('div');
            taskEl.classList.add('task');
            taskEl.innerHTML = `
            <div class='task-header>
                <h2 class='task-title'>${item.title}</h2>
                <p class='task-dueDate'>${item.dueDate}</p>
            </div>
            <div class='task-info'>
                <p class='task-description'>${item.description}</p>
                <p class='task-priority'>${item.priority}</p>
                <p class='task-notes'>${item.notes}</p>
            </div>
            `
            display.appendChild(taskEl);
        };

    }
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
