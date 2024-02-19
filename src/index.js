import pageOnLoad from "./modules/interface.js";
import Task from "./modules/task.js";
import Project from "./modules/project.js";

// main arr that store all projects, tasks
const TASKS = [];

const DEFAULT_DATA = new Project('DEFAULT','DESCRIPTION','2024-06-07', 'low', '');
TASKS.push(DEFAULT_DATA);

function addItem() {
    
    const $type = document.getElementById('type');
    const type = $type.value;

    if (type === 'project') {

        const $title = document.getElementById('form-title');
        const title = $title.value;

        const $description = document.getElementById('description');
        const description = $description.value;

        const $dueDate = document.getElementById('dueDate');
        const dueDate = $dueDate.value;

        const $priority = document.getElementById('priority');
        const priority = $priority.value;

        const $notes = document.getElementById('notes');
        const notes = $notes.value;

        const item = new Project(title, description, dueDate, priority, notes);
        
        TASKS.push(item);

    } else if (type === 'task') {

        const $title = document.getElementById('form-title');
        const title = $title.value;

        const $description = document.getElementById('description');
        const description = $description.value;

        const $dueDate = document.getElementById('dueDate');
        const dueDate = $dueDate.value;

        const $priority = document.getElementById('priority');
        const priority = $priority.value;

        const $notes = document.getElementById('notes');
        const notes = $notes.value;

        const item = new Task(title, description, dueDate, priority, notes);
        TASKS.push(item);
    };

    console.log(TASKS);

}

function mainRender(arr) {
    const display = document.querySelector('#display');

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let itemEl = document.createElement('div');
        itemEl.classList.add(`item-${i}-card`);
        itemEl.innerHTML = `
        <div class='item-header'>
            <p class='item-title'><em>${item.title}</em></p> 
            <p class='item-info'>${item.type} -- ${item.dueDate}</p> 
            <div class='button-container'>
                <button class='edit-btn-${i}'>edit</button>
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
        <label for='type'>Type: </label>
        <select id='type'>
            <option value='project'>Project</option>
            <option value='task'>Task</option>
        </select>
    </fieldset>
    <fieldset>
        <label for='form-title'>Title: </label>
        <input type='text' id='form-title' maxlength=100>
    </fieldset>
    <fieldset>
        <label for='description'>Description: </label>
        <textarea id='description' placeholder='Outline key points for upcoming conference...' rows=10 cols=30 maxlength=100></textarea>
    </fieldset>
    <fieldset>
        <label for='dueDate'>Due Date: </label>
        <input id='dueDate' type='date'>
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
        <textarea id='notes' placeholder='Review X, Add Y...' rows=10 cols=30 maxlength=250></textarea>
    </fieldset>
    <fieldset>
        <button type='submit' id='submit-item'>Add</button>
    </fieldset>
    `
    display.appendChild(form);

};

function subRender(arr, index) {
    const display = document.querySelector('#display');
    const item = arr[index];

    if (item.type == 'task') {
        // render full task
    } else if (item.type = 'project') {
        // render full project
    }
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
    });

    document.addEventListener("click", function(e) {
        const target = e.target.closest('#submit-item');
        if (target) {
            addItem();
            clearDisplay();
            mainRender();
        }
    });


};

function init() {
    pageOnLoad();
    mainRender(TASKS);
    buttonEvents();
};

init();