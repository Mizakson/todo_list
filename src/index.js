import Project from "./modules/project.js";
import Task from "./modules/task.js";
import pageOnLoad from "./modules/interface.js";

const DEFAULT_PROJECT = new Project('DEFAULT','N/A','N/A','N/A','N/A','N/A');
let TASK1 = new Task('Go food shopping', '', '2024-06-07', 'mid', 'buy apples, milk');
DEFAULT_PROJECT.additem(TASK1);

function addFormItem() {
    const defaultText = 'Edit me...';

    const $type = document.getElementById('type');
    const type = $type.value;

    if (type === 'project') {

        const $name = document.getElementById('name');
        const name = $name.value;

        const $dueDate = document.getElementById('date');
        const dueDate = $dueDate.value;

        const $priority = document.getElementById('priority');
        const priority = $priority.value;

        const item = new Project(name, defaultText, dueDate, priority, defaultText);
        DEFAULT_PROJECT.items.push(item);

    } else if (type === 'task') {

        const $name = document.getElementById('name');
        const name = $name.value;

        const $dueDate = document.getElementById('date');
        const dueDate = $dueDate.value;

        const $priority = document.getElementById('priority');
        const priority = $priority.value;


        const item = new Task(title, defaultText, dueDate, priority, defaultText);
        DEFAULT_PROJECT.items.push(item);
    };

    console.log(DEFAULT_PROJECT.items);

}

function clearForm() {
    const form = document.querySelector('#item-form');
    form.innerHTML = '';
    createBlankForm();
}

function createBlankForm() {
    const body = document.querySelector('body');
    
    const formDisplay = createBasicEl('div','form-display','','');
    const form = createBasicEl('form','item-form','','');

    form.innerHTML += `
    <h2 id='form-title'>What to do?...</h2>
    <fieldset>
        <label for='type'>Type: </label>
            <select name='type' id='type'>
                <option value='project'>Project</option>
                <option value='task'>Task</option>
            </select>        
    </fieldset>
    <fieldset>
        <label for='name'>Name: </label>
        <input type='text' id='name' maxlength='75' placeholder=' -- Enter text here -- '>
    </fieldset>
    <fieldset>
        <label for='date'>Date: </label>
        <input type='text' id='date' maxlength='25' placeholder=' -- mm/dd/yy -- '>
    </fieldset>
    <fieldset>
        <label for='priority'>Priority: </label>
            <select name='priority' id='priority'>
                <option value='low'>Low</option>
                <option value='mid'>Mid</option>
                <option value='high'>High</option>
            </select>
    </fieldset>
    <fieldset>
    <button id='form-submit' type='submit'>Add item</button>
    </fieldset>

    `

    formDisplay.appendChild(form);
    body.appendChild(formDisplay);

};

function buttonEvents() {
    document.addEventListener('onclick', function(e) {
        const target = e.target.closest('#form-submit');
        if (target) {
            addFormItem();
        }
    })
}


function init() {
    buttonEvents();
    pageOnLoad();
}

init();