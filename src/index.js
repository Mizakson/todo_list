import Project from "./modules/project.js";
import Task from "./modules/task.js";
import pageOnLoad from "./modules/interface.js";

// default data
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
        itemEl.classList.add(`card`);
        itemEl.id = `${i}`;

            itemEl.innerHTML += `
                <div class='card-header'>
                    <h2 class='card-title'>${item.name}</h2>
                    <h2 class='card-type' value='${item.type}'>${item.type}</h2>
                    <h2 class='card-date'>${item.dueDate}</h2>
                    <button class='edit' id='edit-${i}'>Edit</button>
                    <button class='delete' id='delete-${i}'>Delete</button>
                    <button class='toggle' id='toggle-${i}'>Toggle</button>
                </div>
                <div class='card-info' id='card-info-${i}'>
                    <div class='editable' id='editable=${i}' contenteditable='true'>
                    <p class='card-description'>${item.description}</p>
                    <p class='card-notes'>${item.notes}</p>
                    <p class='card-priority'>${item.priority}</p> 
                </div>
                <button class='save' id='save-${i}'>Save</button>
                </div>
            `;
            display.appendChild(itemEl);
            const header = document.querySelector('.card-header');

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
            buttonEvents();
        }
    });

    // get an array of all cards from display
    const display = document.querySelector('.display');
    const arr = Array.from(display.children);

    // console.log(arr);

    //on click for main card edit btn
    for (let i = 0; i < arr.length; i++) {
        let card = Array.from(arr[i].children);
        for (let j = 0; j < card.length; j++) {
            const header = Array.from(card[0].children);
            for (let k = 0; k < header.length; k++) {
                if (header[k].className === 'edit') {
                    header[k].onclick = function() {
                        console.log('clicked' + i);
                        card[1].classList.toggle('active');
                    }
                }
            }
        }
    }

    // on click for deleteBtn


    // on click for toggleBtn


    // on click for addTaskBtn

}



function init() {
    pageOnLoad();
    render(DEFAULT_PROJECT.items);
    buttonEvents();
}

init();