import pageOnLoad from "./modules/interface.js";
import Project from "./modules/project.js";
import Task from "./modules/task.js";


// default data
const MAIN_PROJECT = new Project('main', 'stores all projects and tasks', 'n/a','n/a','n/a');
const DEFAULT_PROJECT = new Project('test project','description here','4/5/24','mid','just testing');
const DEFAULT_PROJECT2 = new Project('tteesstt project','description here','4/5/24','mid','just testing');
const mainArr = MAIN_PROJECT.items;
MAIN_PROJECT.additem(DEFAULT_PROJECT);
MAIN_PROJECT.additem(DEFAULT_PROJECT2);

const NESTED_TASK = new Task('nest task','description here','8/6/29','high','just nesting');
const NESTED_TASK2 = new Task('nest task','description here','4/2/25','low','jjuusstt nneessttiinngg');
DEFAULT_PROJECT.additem(NESTED_TASK);
DEFAULT_PROJECT.additem(NESTED_TASK2);



function createEl(tag, cls, idName, text) {
    const el = document.createElement(tag);
    
    if (cls != '') {
        el.classList.add(cls);
    }

    if (idName != '') {
        el.id = idName;
    }
    
    if (text != '') {
        el.innerText = text;
    }
    
    return el;
}

function clearDisplay() {
    const display = document.querySelector('.display');
    display.innerHTML = '';
}


// main render funciton
function mainRender() {
    // iterate through mainArr to display all projects
    const display = document.querySelector('.display');
    mainArr.forEach(function(item, index, arr) {
        const card = createEl('div','card',`card`,'');

        const header = createEl('div','header','','');
        const name = createEl('h2','project-name','',`${item['name']}`);
        header.appendChild(name);

        card.appendChild(header)
        
        const btns = createEl('div','btns','','');
        const view = createEl('button','view',``,'View');
        const toggle = createEl('button','',``,'Toggle');
        const del = createEl('button','',``,'X');
        
        btns.appendChild(view);
        btns.appendChild(toggle);
        btns.appendChild(del);

        card.appendChild(btns)

        const info = createEl('div','info','','');
        const description = createEl('p', 'description','',`Description: \n ${item['description']}`);
        const dueDate = createEl('p', 'dueDate','',`Date: \n ${item['dueDate']}`);
        const priority = createEl('p', 'priority','',`Priority: \n ${item['description']}`);
        const notes = createEl('p', 'notes','',`Notes: \n ${item['description']}`);

        info.appendChild(description);
        info.appendChild(dueDate);
        info.appendChild(priority);
        info.appendChild(notes);

        card.appendChild(info);

        display.appendChild(card);
        
    })
    
}

function subRender(i) {
    const item = mainArr[i].items;

    item.forEach(function (item,index,arr) {

    });
}

function buttonEvents() {


}

function init() {
    pageOnLoad();
    mainRender();
    buttonEvents();
}

init();