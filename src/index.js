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
            <p class='item-title'><em>${item.title}</em></p> 
            <p class='item-info'>${item.type} -- ${item.dueDate}</p> 
            <div class='button-container'>
                <button class='edit-btn'>edit</button>
                <button class='delete-btn-${i}'>X</button>
            </div>
        </div>
            `;
            display.appendChild(itemEl);
        }; 
    };

function clearDisplay() {
    const display = document.querySelector('#display');
    display.innerHTML = '';
}

function showAddForm() {
    const display = document.querySelector('#display');
    
    const form = document.createElement('form');
    form.id = 'add-form';

    form.innerHTML += `
    <fieldset>
        <label for='type'>Type:</label>
        <select id='type'>
            <option value='project'>Project</option>
            <option value='task'>Task</option>
        </select>
    </fieldset>
    <fieldset>
        <label for='description'>Description: </label>
        <textarea id='description' name='description' placeholder='Outline key points for upcoming conference...' rows=10 cols=30 maxlength=100></textarea>
    </fieldset>
    <fieldset>
        <label for='dueDate'>Due Date: </label>
        <input id='dueDate' type='date' name='dueDate'>
    </fieldset>
    <fieldset>
        <label for='priority'>Priority: </label>
        <select id='priority'>
            <option value='low'>Low</option>
            <option value='mid'>Mid</option>
            <option value='high'>High</option>
        </select>
    </fieldset>
    <fieldset>
        <label for='notes'>Notes: </label>
        <textarea id='notes' name='notes' placeholder='Review X, Add Y...' rows=10 cols=30 maxlength=250></textarea>
    </fieldset>
    <fieldset>
        <button type='submit' id='submit-item'>Add</button>
    </fieldset>
    `
    display.appendChild(form);

};

function buttonEvents() {
    document.addEventListener("click", function(e) {
        const target = e.target.closest('#main-add');
        if (target) {
            clearDisplay();
            showAddForm();
        }
    });

    document.addEventListener("click", function(e) {
        const target = e.target.closest('#home');
        if (target) {
            clearDisplay();
            mainRender();
        }
    })
}

function init() {
    pageOnLoad();
    mainRender();
    buttonEvents();
};

init();