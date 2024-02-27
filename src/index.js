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
DEFAULT_PROJECT2.additem(NESTED_TASK);



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
        const edit = createEl('button','edit',`${index}`,'Edit');
        const toggle = createEl('button','toggle',`${index}`,'Toggle');
        const del = createEl('button','delete',`${index}`,'X');
        const add = createEl('button','add',`add-${index}`,'+');
        const details = createEl('button','details',`details-${index}`,'Details');
        
        btns.appendChild(view);
        btns.appendChild(edit);
        btns.appendChild(toggle);
        btns.appendChild(del);
        btns.appendChild(add);
        btns.appendChild(details);

        card.appendChild(btns)

        const info = createEl('div','info',`info-${index}`,'');
        const description = createEl('p', 'description','',`Description: \n ${item['description']}`);
        const dueDate = createEl('p', 'dueDate','',`Date: \n ${item['dueDate']}`);
        const priority = createEl('p', 'priority','',`Priority: \n ${item['priority']}`);
        const notes = createEl('p', 'notes','',`Notes: \n ${item['notes']}`);

        info.appendChild(description);
        info.appendChild(dueDate);
        info.appendChild(priority);
        info.appendChild(notes);

        card.appendChild(info);

        const editProjForm = createEl('div','form-edit-container', `form-edit-container-${index}`,'');
        editProjForm.innerHTML = `<form class='proj-edit-form' id='proj-edit-form-${index}'>
        <input type='text' class='proj-edit-name' id='proj-edit-name-${index}' maxlength='75' placeholder=' -- Name -- '>
        <input type='text' class='proj-edit-description' id='proj-edit-description-${index}' maxlength='75' placeholder=' -- Description -- '>
        <input type='text' class='proj-edit-dueDate' id='proj-edit-dueDate-${index}' maxlength='25' placeholder=' -- mm/dd/yy -- '>
        <input type='text' class='proj-edit-priority' id='proj-edit-priority-${index}' maxlength='10' placeholder=' -- Priority -- '>
        <input type='text' class='proj-edit-notes' id='proj-edit-notes-${index}' maxlength='75' placeholder=' -- Notes -- '>
        <button type='submit' id='proj-edit-submit-${index}'>Save Changes</button>
        </form>

        `
        card.appendChild(editProjForm);

        const childFormContainer = createEl('div','child-form-container', `child-form-container-${index}`,'');
        childFormContainer.innerHTML = `
        <form class='child-task-form' id='child-task-form-${index}'>
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
    </form>
        `;

        card.appendChild(childFormContainer);


        display.appendChild(card);
        
    })
    
}

function subRender() {
    
    mainArr.forEach(function(superItem,superIndex,superArr) {
        const proj = document.querySelector('.display').children[superIndex];
        const container = createEl('div','task-container', `task-container-${superIndex}`,'');
        // console.log(proj);
        const arr = mainArr[superIndex].items;
        arr.forEach(function(item,index) {
            const card = createEl('div','task',`task-${index}`,'');
            
            const header = createEl('div','child-header',`child-header-${index}`,'');
            const name = createEl('h3', 'child-name', `child-name-${index}`,`${item['name']}`);
            const date = createEl('p','child-dueDate', `child-dueDate-${index}`,`${item['dueDate']}`);
            header.appendChild(name);
            header.appendChild(date);
    
            const btns = createEl('div', 'child-btns',`child-btns${index}`,'');
            const view = createEl('button','child-view',`child-view-${index}`,'View');
            const toggle = createEl('button','child-toggle',`child-toggle-${index}`,'Toggle');
            const edit = createEl('button','child-edit',`child-edit-${index}`,'Edit');
            const del = createEl('button','child-delete',`child-delete-${index}`,'X');
    
            btns.appendChild(view);
            btns.appendChild(edit);
            btns.appendChild(toggle);
            btns.appendChild(del);
    
            const editFormContainer = createEl('div','child-form',`child-form-${index}`,'');
            const editForm = createEl('form','child-edit-form',`child-edit-form-${index}`,'');
    
            editForm.innerHTML = `
            <input type='text' class='child-edit-name' id='child-edit-name-${index}' maxlength='75' placeholder=' -- Name -- '>
            <input type='text' class='child-edit-description' id='child-edit-description-${index}' maxlength='75' placeholder=' -- Description -- '>
            <input type='text' class='child-edit-dueDate' id='child-edit-dueDate-${index}' maxlength='25' placeholder=' -- mm/dd/yy -- '>
            <input type='text' class='child-edit-priority' id='child-edit-priority-${index}' maxlength='10' placeholder=' -- Priority -- '>
            <input type='text' class='child-edit-notes' id='child-edit-notes-${index}' maxlength='75' placeholder=' -- Notes -- '>
            <button type='submit' id='child-edit-submit-${index}'>Save Changes</button>
            `
    
            editFormContainer.appendChild(editForm);
            
            const info = createEl('div', 'child-info', `child-info-${index}`,'');
            const desc = createEl('p','child-description',`child-description-${index}`,`Description: \n ${item['description']}`);
            const prio = createEl('p','child-priority',`child-priority-${index}`,`Priority: \n ${item['priority']}`);
            const notes = createEl('p','child-notes',`child-notes-${index}`,`Notes: \n ${item['notes']}`);
    
            info.appendChild(desc);
            info.appendChild(prio);
            info.appendChild(notes);
    
            card.appendChild(header);
            card.appendChild(btns);
            card.appendChild(info);
            card.appendChild(editFormContainer);
    
            container.appendChild(card);
            proj.appendChild(container);
        });
    })

    
}


function mainButtonEvents() {
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
                subItem.addEventListener("click",function(e) {
                    // console.log('clicked view', index);
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    const info = arr[index].childNodes[2];
                    info.classList.toggle('active');
                    // console.log(arr[index]);
                })
            }

            if (subItem.classList.value === 'edit') {
                subItem.addEventListener("click", function() {
                    arr[index].childNodes[3].classList.toggle('editable');
                    const editProjForm = arr[index].childNodes[3].childNodes[0];
                    // console.log(editProjForm.children);
                    editProjForm.addEventListener("submit", function(e) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        const name = editProjForm.children[0].value;
                        const desc = editProjForm.children[1].value;
                        const date = editProjForm.children[2].value;
                        const prio = editProjForm.children[3].value;
                        const notes = editProjForm.children[4].value;
                        mainArr[index].editName(name);
                        mainArr[index].editDescription(desc);
                        mainArr[index].editDueDate(date);
                        mainArr[index].editPriority(prio);
                        mainArr[index].editNotes(notes);
                        clearDisplay();
                        mainRender();
                        mainButtonEvents();
                    })
                })
            }

            if (subItem.classList.value === 'details') {
                subItem.addEventListener("click", function(e) {
                    e.preventDefault();
                    arr[index].childNodes[5].classList.toggle('active');
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
                    const form = arr[index].childNodes[4].children[0];
                    form.classList.toggle('active');
                });
            }

            else if (subItem.classList.value === 'delete') {
                subItem.addEventListener("click", function() {
                    MAIN_PROJECT.deleteItem(index);
                    clearDisplay();
                    mainRender();
                    mainButtonEvents();
                });


            }


        });

    });

    // sub render events here
    nodes.forEach(function(superItem,superIndex,superArr) {
        const card = Array.from(superItem.children);
        card.forEach(function(item,index,arr) {
            if (item.classList.value === 'child-form-container') {
                const form = item.children[0]
                form.addEventListener("submit", function(e) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    const name = form.children[1].value;
                    const date = form.children[1].value;
                    const prio = form.children[1].value;
                    const description = 'edit me...';
                    const notes = 'edit me...';

                    const newTask = new Task(name,description,date,prio,notes);
                    const currentProj = mainArr[superIndex];
                    currentProj.items.push(newTask);
                    clearDisplay();
                    mainRender();
                    subRender();
                    mainButtonEvents();
                })
            const tasks = Array.from(superItem.children[5].childNodes);
            tasks.forEach(function(subItem,subIndex,subArr) {
                const btn = Array.from(subItem.children[1].children);
                console.log(btn);
                const tasksArr = Array.from(superItem.children[5].children);

                // view
                btn[0].addEventListener("click", function() {
                    tasksArr[subIndex].children[2].classList.toggle('active');
                })

                // edit
                btn[1].addEventListener("click", function() {
                    console.log('clicked edit');
                })

                // toggle
                btn[2].addEventListener("click", function() {
                    console.log('clicked toggle');
                }) 
                
                // delete
                btn[3].addEventListener("click", function() {
                    console.log('clicked del');
                })                

            });

            }
        })
    });

    const mainForm = document.querySelector('.item-form');
    mainForm.addEventListener("submit", function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        // 1 name, 3 date, 5 prio
        const defaultText = 'edit me...';

        const name = mainForm.children[1].value;
        const desc = defaultText;
        const date = mainForm.children[3].value;
        const prio = mainForm.children[5].value;
        const notes = defaultText;

        const item = new Project(name,desc,date,prio,notes);
        MAIN_PROJECT.additem(item);
        clearDisplay();
        mainRender();
        mainButtonEvents();
    })

    // const taskForm = 
    

}

function init() {
    pageOnLoad();
    mainRender();
    subRender();
    mainButtonEvents();
}

init();