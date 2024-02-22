import pageOnLoad from "./modules/interface.js";
import Project from "./modules/project.js";
import Task from "./modules/task.js";


// default data
const MAIN_PROJECT = new Project('main', 'stores all projects and tasks', 'never gets completed','n/a','n/a');
const DEFAULT_PROJECT = new Project('test project','description here','4/5/24','mid','just testing');
const DEFAULT_TASK = new Task('test task','description here','8/6/25','low','just testing');
const mainArr = MAIN_PROJECT.items;
MAIN_PROJECT.additem(DEFAULT_PROJECT);
MAIN_PROJECT.additem(DEFAULT_TASK);
// console.log(MAIN_PROJECT.items);

function createEl(tag, cls, idName, text) {
    const el = document.createElement(tag);
    el.classList.add(cls);
    el.id = idName;
    el.innerText = text;
    return el;
}

// main render funciton
function render() {
    const display = document.querySelector('.display');
    mainArr.forEach(function (item, index, arr,) {
        const card = createEl('div','card',`card-${index}`,'');
        const header = createEl('div','header','','');
        const btns = createEl('div','btns',`btns-${index}`,'');

        const name = createEl('h3','name',`name${index}`,`${item['name']}`);
        const type = createEl('p','type',`type${index}`,`${item['type']}`);
        const dueDate = createEl('p','dueDate',`dueDate${index}`,`${item['dueDate']}`);

        if (item['type'] === 'project') {
            const addTask = createEl('button','addTask',`addTask-${index}`,'+');
            btns.appendChild(addTask);
        }

        const edit = createEl('button','edit',`edit-${index}`,'Edit');
        const del = createEl('button','delete',`delete-${index}`,'Delete');
        const toggle = createEl('button','toggle',`toggle-${index}`,'Toggle');


        btns.appendChild(edit);
        btns.appendChild(del);
        btns.appendChild(toggle);

        header.appendChild(name);
        header.appendChild(type);
        header.appendChild(dueDate);
        header.appendChild(btns);

        card.appendChild(header);
        display.appendChild(card);


    })
        
    
}


function init() {
    pageOnLoad();
    render();
}

init();