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

export default { pageOnLoad, createContent, createNav, createTitle };