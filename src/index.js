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
        const card = createEl('div','card',`${index}`,'');

        const header = createEl('div','header','','');
        const name = createEl('h2','project-name','',`${item['name']}`);
        header.appendChild(name);

        card.appendChild(header)
        
        const btns = createEl('div','btns','','');
        const view = createEl('button','view',`${index}`,'View');
        const toggle = createEl('button','toggle',`${index}`,'Toggle');
        const del = createEl('button','delete',`${index}`,'X');
        const add = createEl('button','add',`add-${index}`,'+');
        
        btns.appendChild(view);
        btns.appendChild(toggle);
        btns.appendChild(del);
        btns.appendChild(add);

        card.appendChild(btns)

        const info = createEl('div','info',`info-${index}`,'');
        const description = createEl('p', 'description','',`Description: \n ${item['description']}`);
        const dueDate = createEl('p', 'dueDate','',`Date: \n ${item['dueDate']}`);
        const priority = createEl('p', 'priority','',`Priority: \n ${item['description']}`);
        const notes = createEl('p', 'notes','',`Notes: \n ${item['description']}`);

        info.appendChild(description);
        info.appendChild(dueDate);
        info.appendChild(priority);
        info.appendChild(notes);

        card.appendChild(info);

        const formContainer = createEl('div','form-container', `form-container-${index}`,'');
        formContainer.innerHTML = `
        <label for='task-name-${index}'>Task Name: </label>
        <input type='text' id='task-name-${index}' maxlength='75' placeholder=' -- Enter text here -- '>
        <label for='task-dueDate-${index}'>Date: </label>
        <input type='text' id='task-dueDate-${index}' maxlength='25' placeholder=' -- mm/dd/yy -- '>
        <label for='task-priority-${index}'>Priority: </label>
            <select name='task-priority-${index}' id='task-priority-${index}'>
                <option value='low'>Low</option>
                <option value='mid'>Mid</option>
                <option value='high'>High</option>
            </select>
    <button id='task-form-submit-${index}' type='submit'>Add item</button>
        `;

        card.appendChild(formContainer);


        display.appendChild(card);
        
    })
    
}

function subRender(index) {
    const item = mainArr[i].items;

    item.forEach(function (item,index,arr) {

    });
}


function buttonEvents() {
    // button events for mainRender elements
    const display = document.querySelector('.display');
    const nodes = display.childNodes;
    nodes.forEach(function (item,index,arr) {
        
        const btns = item.childNodes[1].childNodes;
        // console.log(item);

        btns.forEach(function(subItem) {
            // console.log(subItem);
            
            // toggle info for project
            if (subItem.classList.value === 'view') {
                subItem.addEventListener("click",function() {
                    console.log('clicked view', index);
                    const info = arr[index].childNodes[2];
                    info.classList.toggle('active');
                })
            }

            // toggle status for project
            else if (subItem.classList.value === 'toggle') {
                subItem.addEventListener("click", function(){
                    mainArr[index].status = !mainArr[index].status;
                    arr[index].classList.toggle('green');
                });
            }

            if (subItem.classList.value === 'add') {
                // make addTask form visible
                subItem.addEventListener("click", function() {
                    const form = arr[index].childNodes[3];
                    form.classList.toggle('active');
                });
            }

            else if (subItem.classList.value === 'delete') {
                subItem.addEventListener("click", function() {
                    MAIN_PROJECT.deleteItem(index);
                    clearDisplay();
                    mainRender();
                    buttonEvents();
                });


            }

        });
    });

}

function init() {
    pageOnLoad();
    mainRender();
    buttonEvents();
}

init();