// only global var
const body = document.querySelector('body');

function pageOnLoad() {
    createTitle();
    createContent();
    createNav();
};

function createTitle() {
    const titleContainer = document.createElement('div');
    titleContainer.id = 'title';

    const titleText = document.createElement('h1');
    titleText.innerHTML = 'ToDo List';
    titleContainer.appendChild(titleText);

    const titleDescription = document.createElement('p');
    titleDescription.innerHTML = 'A program by Mizakson';
    titleContainer.appendChild(titleDescription);

    const projectNumber = document.createElement('p');
    projectNumber.innerHTML = 'Odin Project JavaScript Course Project #4';
    titleContainer.appendChild(projectNumber);
    
    body.appendChild(titleContainer);
};

function createContent() {
    const content = document.createElement('div');
    content.id = 'content';

    body.appendChild(content);

    const toDoTitle = document.createElement('h2');
    toDoTitle.innerHTML = 'What to do?...';
    content.appendChild(toDoTitle);
};

function createNav() {
    const nav = document.createElement('nav');
    const content = document.querySelector('#content');

    const homeBtn = document.createElement('button');
    homeBtn.id = 'home';
    homeBtn.innerHTML = 'Home';
    nav.appendChild(homeBtn);

    const addBtn = document.createElement('button');
    addBtn.id = 'add';
    addBtn.innerHTML = '+';
    nav.appendChild(addBtn);

    const clearItemBtn = document.createElement('button');
    clearItemBtn.id = 'clear';
    clearItemBtn.innerHTML = 'clear all tasks';
    nav.appendChild(clearItemBtn);

    content.appendChild(nav);

    const projectDisplay = document.createElement('div');
    projectDisplay.id = 'display';

    content.appendChild(projectDisplay);
};

function showItem(item) {
    const display = document.querySelector('#display');
        if (item.type === 'project') {
            let projectEl = document.createElement('div');
            projectEl.classList.add('project');
            projectEl.innerHTML = `
            <div class='project-header'>
                <h3 class='project-title'>${item.title}</h3>
                <p class='project-dueDate'>${item.dueDate}</p>
            </div>
            <div class='project-info'>
                <p class='project-description'>${item.description}</p>
                <p class='project-priority'>${item.priority}</p>
                <p class='project-notes'>${item.notes}</p>
            </div>
            `
            display.appendChild(projectEl);

        } else if (item.type === 'task') {
            let taskEl = document.createElement('div');
            taskEl.classList.add('task');
            taskEl.innerHTML = `
            <div class='task-header>
                <h2 class='task-title'>${item.title}</h2>
                <p class='task-dueDate'>${item.dueDate}</p>
            </div>
            <div class='task-info'>
                <p class='task-description'>${item.description}</p>
                <p class='task-priority'>${item.priority}</p>
                <p class='task-notes'>${item.notes}</p>
            </div>
            `
            display.appendChild(taskEl);
        };            
};

function render(arr) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        showItem(item);
    }; 
}

export default { pageOnLoad, createTitle, createContent, createNav, render } ;