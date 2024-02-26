import pageOnLoad from "./modules/interface.js";
import Project from "./modules/project.js";
import Task from "./modules/task.js";


// default data
const MAIN_PROJECT = new Project('main', 'stores all projects and tasks', 'never gets completed','n/a','n/a');
const DEFAULT_PROJECT = new Project('test project','description here','4/5/24','mid','just testing');
const mainArr = MAIN_PROJECT.items;
MAIN_PROJECT.additem(DEFAULT_PROJECT);
const NESTED_TASK = new Task('nest task','description here','8/6/29','high','just nesting');
const NESTED_TASK2 = new Task('nest task','description here','8/6/29','high','just nesting');
DEFAULT_PROJECT.additem(NESTED_TASK);
DEFAULT_PROJECT.additem(NESTED_TASK2);



function createEl(tag, cls, idName, text) {
    const el = document.createElement(tag);
    el.classList.add(cls);
    el.id = idName;
    el.innerText = text;
    return el;
}

function clearDisplay() {
    const display = document.querySelector('.display');
    display.innerHTML = '';
}


// main render funciton
function render() {
    
    
}

function buttonEvents() {


}

function init() {
    pageOnLoad();
    render();
    buttonEvents();
}

init();