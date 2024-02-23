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

// main render funciton
function render() {
    const display = document.querySelector('.display');
    
    // displays the first level of mainArr
    mainArr.forEach(function (item, index, arr,) {
        const card = createEl('div','card',`card-${index}`,'');
        const header = createEl('div','header','','');
        const btns = createEl('div','btns',`btns-${index}`,'');

        const name = createEl('h3','name',`name${index}`,`${item['name']}`);
        const type = createEl('p','type',`type${index}`,`${item['type']}`);
        const dueDate = createEl('p','dueDate',`dueDate${index}`,`${item['dueDate']}`);

        const info = createEl('div','info',`info-${index}`,'');
        const description = createEl('p', 'description', `description-${index}`,`${item['description']}`);
        const priority = createEl('p','prio',`prio-${index}`,`${item['priority']}`);
        const notes = createEl('p','notes',`notes-${index}`,`${item['notes']}`)

        const childContainer = createEl('div','child-container', `child-container-${index}`,'');

        info.appendChild(description);
        info.appendChild(priority);
        info.appendChild(notes);
        info.style.display = 'none';

        if (item['type'] === 'project') {
            const addTask = createEl('button','addTask',`addTask-${index}`,'+');
            btns.appendChild(addTask);

            const childItem = arr[index];

            // the values from the child task objects
            const childTasks = (Object.entries(childItem)[7][1]);

            childTasks.forEach(function(item, index) {
                const card = createEl('div','child-card',`child-card${index}`,'');
                const header = createEl('div','child-header',`child-header-${index}`,'');
                const btns = createEl('div','child-btns',`child-btns-${index}`,'');

                const name = createEl('h4','child-name',`child-name-${index}`,`${item['name']}`);
                const dueDate = createEl('p','child-dueDate',`child-dueDate-${index}`,`${item['dueDate']}`);
                const priority = createEl('p','child-prio',`child-prio-${index}`,`${item['priority']}`);

                const edit = createEl('button','child-edit',`child-edit-${index}`,'Edit');
                const del = createEl('button','child-delete',`child-delete-${index}`,'Delete');
                const toggle = createEl('button','child-toggle',`child-toggle-${index}`,'Toggle');

                header.appendChild(name);
                header.appendChild(dueDate);
                header.appendChild(priority);

                btns.appendChild(edit);
                btns.appendChild(del);
                btns.appendChild(toggle);

                card.appendChild(header);
                card.appendChild(btns);

                childContainer.appendChild(card);
                card.style.display = 'none';

            }); 

        
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
        card.appendChild(info);
        card.appendChild(childContainer);
        display.appendChild(card);

    })

    
}



function init() {
    pageOnLoad();
    render();
}

init();