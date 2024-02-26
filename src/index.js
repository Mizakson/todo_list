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

                const info = createEl('div','child-info',`child-info-${index}`,'');
                const description = createEl('p','child-description', `child-description-${index}`, `${item['description']}`);
                const notes = createEl('p','child-description', `child-description-${index}`, `${item['notes']}`);
                
                const edit = createEl('button','child-edit',`child-edit-${index}`,'Edit');
                const del = createEl('button','child-delete',`child-delete-${index}`,'Delete');
                const toggle = createEl('button','child-toggle',`child-toggle-${index}`,'Toggle');

                header.appendChild(name);
                header.appendChild(dueDate);
                header.appendChild(priority);

                info.appendChild(description);
                info.appendChild(notes);

                btns.appendChild(edit);
                btns.appendChild(del);
                btns.appendChild(toggle);

                card.appendChild(header);
                card.appendChild(btns);
                card.appendChild(info);

                childContainer.appendChild(card);

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

function buttonEvents() {
    // edit on click makes info visible
    const display = Array.from(document.querySelector('.display').children);

    display.forEach(function (item,index,arr) {
        const itemArr = Array.from(item.children);
        const header = Array.from(itemArr[0].children);
        const btns = Array.from(header[3].children);
        // console.log(header);
        const type = header[1].innerText;
        // console.log(type);
        // console.log(itemArr);

        // child elements of projects
        // mainArr[n].items only if type is project
        if (type === 'project') {
            const child = Array.from(itemArr[2].children);
            console.log(child);
            child.forEach(function (childItem, childIndex, childArr) {
                const childEl = Array.from(childItem.children);
                console.log(childEl);
                const childBtns = Array.from(childEl[1].children);
                console.log(childBtns);
                childBtns.forEach(function (subItem, subIndex, subArr) {
                    if (childBtns[subIndex].classList.value === 'child-edit') {
                        childBtns[subIndex].onclick = function() {
                            console.log(`clicked edit btn in child item ${childIndex}`);
                            // reveal child info
                            childEl[2].style.display = 'flex';
                        }
                    }
                    if (childBtns[subIndex].classList.value === 'child-delete') {
                        childBtns[subIndex].onclick = function() {
                            console.log(`clicked delete btn in child item ${childIndex}`)
                        };
                    }
                    if (childBtns[subIndex].classList.value === 'child-toggle') {
                        childBtns[subIndex].onclick = function() {
                            console.log(`clicked toggle btn in child item ${childIndex}`)
                        };
                    }
                })
            })
        }

        // onclick methods for first level of mainArr
        btns.forEach(function (subItem,subIndex,subArr) {
            if (btns[subIndex].classList.value === 'edit') {
                btns[subIndex].onclick = function() {
                    itemArr[1].style.display = 'flex';
                    console.log(`clicked edit btn in item ${index}`);
                }
            }
            if (btns[subIndex].classList.value === 'addTask') {
                btns[subIndex].onclick = function() {
                    console.log(`clicked addTask btn in project ${index}`);
                    // show child tasks
                    itemArr[2].style.display = 'flex';
                    // add task input form
                }
            }
            if (btns[subIndex].classList.value === 'toggle') {
                btns[subIndex].onclick = function () {
                    console.log(`clicked toggle btn in item ${index}`);
                }
            }
            if (btns[subIndex].classList.value === 'delete') {
                btns[subIndex].onclick = function () {
                    console.log(`clicked delete btn in item ${index}`);
                }
            }

        })
    })
}

function init() {
    pageOnLoad();
    render();
    buttonEvents();
}

init();