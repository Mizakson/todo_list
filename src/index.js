import pageOnLoad from "./modules/interface.js";
import Task from "./modules/task.js";
import Project from "./modules/project.js";

// main arr that store all projects, tasks
const TASKS = [];

// default data, 1 proj + 1 task
const INITIAL_PRROJECT = new Project('PROJ1','DESC','DATE','PRIO','NOTES');
const INTITAL_TASK = new Task('TODO1','DESC','DATE','PRIO','NOTES');
TASKS.push(INITIAL_PRROJECT);
TASKS.push(INTITAL_TASK);

console.log(TASKS);


function mainRender() {
    const display = document.querySelector('#display');
    let arr = TASKS;

    for (let i = 0; i < TASKS.length; i++) {
        let item = arr[i];
        let itemEl = document.createElement('div');
        itemEl.innerHTML = `<div class='item-${i}'></div>`;
            const shortDescription = document.createElement('p');
            shortDescription.classList.add('item-header');
            shortDescription.innerHTML = `<em>${item.title}:</em> ${item.type} -- ${item.dueDate} <button class='edit-btn${i}'>edit</button>`;
            itemEl.appendChild(shortDescription);
            display.appendChild(itemEl);
        }; 
    };



function init() {
    pageOnLoad();
    mainRender();
};

init();