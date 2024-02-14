import pageOnLoad from "./modules/interface.js";
import Task from "./modules/task.js";
import Project from "./modules/project.js";

// main arr that store all projects, tasks
const TASKS = [];

// default data, 1 proj + 1 task
const INITIAL_PRROJECT = new Project('PROJ1','DESC','DATE','PRIO','NOTES');
const INTITAL_TASK = new Task('TASK1','DESC','DATE','PRIO','NOTES');
TASKS.push(INITIAL_PRROJECT);
TASKS.push(INTITAL_TASK);

console.log(TASKS);


function mainRender() {
    const display = document.querySelector('#display');
    let arr = TASKS;

    for (let i = 0; i < TASKS.length; i++) {
        let item = arr[i];
        let itemEl = document.createElement('div');
        itemEl.classList.add(`item-${i}`);
        itemEl.innerHTML = `
        <div class='item-header'>
            <p class='item-title'><em>${item.title}:</em></p> 
            <p class='item-info'>${item.type} -- ${item.dueDate}</p> 
            <button class='edit-btn'>edit</button>
        </div>
            `;
            display.appendChild(itemEl);
        }; 
    };



function init() {
    pageOnLoad();
    mainRender();
};

init();