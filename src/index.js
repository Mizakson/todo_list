import Project from "./modules/project.js";
import Task from "./modules/task.js";
import pageOnLoad from "./modules/interface.js";

const DEFAULT_PROJECT = new Project('DEFAULT','N/A','N/A','N/A','N/A');
const DEFAULT_TASK = new Task('DEFAULT','DESC','DATE','PRIO','NOTES');
const TEST_PROJ = new Project('TEST', 'TEST', 'TEST', 'TEST', 'TEST');
const TEST_TASK = new Task('TASK','aaa','bbb','ccc','ddd');

DEFAULT_PROJECT.additem(DEFAULT_TASK);
DEFAULT_PROJECT.additem(TEST_PROJ);
TEST_PROJ.additem(TEST_TASK);

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


        const item = new Task(name, defaultText, dueDate, priority, defaultText);
        DEFAULT_PROJECT.items.push(item);
    };

    console.log(DEFAULT_PROJECT.items);

}

function clearForm() {
    const $name = document.getElementById('name');
    const $dueDate = document.getElementById('date');

    $name.value = "";
    $dueDate.value = "";
}

function clearDisplay() {
    const display = document.querySelector('.display');
    display.innerHTML = '';
}

function render(arr) {
    const display = document.querySelector('.display');
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let itemEl = document.createElement('div');
        itemEl.innerHTML = '';
        itemEl.classList.add(`card-${i}`);

            itemEl.innerHTML += `
                <div class='card-header'>
                    <h2 class='card-title'>${item.name}</h2>
                    <h2 class='card-type'>${item.type}</h2>
                    <h2 class='card-date'>${item.dueDate}</h2>
                    <button class='expand-${i}'>Edit</button>
                    <button class='delete-${i}'>Delete</button>
                </div>
            `;
            display.appendChild(itemEl);

        if (item.type === 'project') {
            for (let j = 0; j < item.items.length; j++) {
                let subItem = item.items[j];
                let subItemEl = document.createElement('div');
                subItemEl.innerHTML = '';
                subItemEl.classList.add(`sub-card-${j}`);
                subItemEl.innerHTML += `
                <div class='sub-card-header'>
                    <h2 class='sub-card-title'>${subItem.name}</h2>
                    <h2 class='sub-card-type'>task</h2>
                    <h2 class='sub-card-date'>${subItem.dueDate}</h2>
                    <button class='sub-expand-${j}'>Edit</button>
                    <button class='sub-delete-${j}'>Delete</button>
                </div>
            `;
            itemEl.appendChild(subItemEl);
        }
    }
        
    }
}

function buttonEvents() {
    document.addEventListener('click', function(e) {
        e.preventDefault();
        const target = e.target.closest('#form-submit');
        if (target) {
            e.preventDefault();
            addFormItem();
            clearForm();
            clearDisplay();
            render(DEFAULT_PROJECT.items);
        }
    })
}


function init() {
    pageOnLoad();
    buttonEvents();
    render(DEFAULT_PROJECT.items);
}

init();