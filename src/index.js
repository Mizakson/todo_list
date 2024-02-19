import Project from "./modules/project.js";
import Task from "./modules/task.js";
import pageOnLoad from "./modules/interface.js";

const DEFAULT_PROJECT = new Project('DEFAULT','N/A','N/A','N/A','N/A','N/A');
let TASK1 = new Task('Go food shopping', '', '2024-06-07', 'mid', 'buy apples, milk');
DEFAULT_PROJECT.additem(TASK1);

function addFormItem() {
    const defaultText = 'Edit me...';
    let item;

    const form = document.querySelector('.item-form');
    const $type = document.querySelector('#type').value;
    const $name = document.querySelector('#name').value; 
    const $date = document.querySelector('#date').value; 
    const $priority = document.querySelector('#priority').value; 
    
    if ($type = 'project') {
        item = new Project($name, defaultText, $date, $priority, defaultText);
    } else if ($type = 'task') {
        item = new Task($name, defaultText, $date, $priority, defaultText);
    };

    DEFAULT_PROJECT.additem(item);

}

function init() {
    pageOnLoad();
}

init();