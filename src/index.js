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

function showAddForm() {
    const display = document.querySelector('#display');
    display.innerHTML = '';
    
    const form = document.createElement('form');
    form.id = 'add-form';

    form.innerHTML += `
    <fieldset>
        <select id='type'>
            <option value='project'>Project</option>
            <option value='task'>Task</option>
        </select>
    </fieldset>
    <fieldset>
        <label for='description'>Description</label>
        <input type='text' name='description' placeholder='Outline key points for upcoming conference...' maxlength=250>
    </fieldset>
    <fieldset>
        <label for='dueDate'>Due Date</label>
        <input type='date' name='dueDate'>
    </fieldset>
    <fieldset>
        <select id='priority'>
            <option value='low'>Low</option>
            <option value='mid'>Mid</option>
            <option value='high'>High</option>
        </select>
    </fieldset>
    <fieldset>
        <label for='notes'>Notes</label>
        <input type='text' name='notes' placeholder='Review X, Add Y...' maxlength=250>
    </fieldset>
    <fieldset>
        <button type='submit' id='submit-item'>Add</button>
    </fieldset>
    `
    display.appendChild(form);

};

function init() {
    pageOnLoad();
    mainRender();
};

init();