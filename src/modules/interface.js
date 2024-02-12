function pageOnLoad() {

    // initial page load
    // title text and project description
    const body = document.querySelector('body');
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


    // create content section
    // will contain projects, tasks
    const content = document.createElement('div');
    content.id = 'content';

    body.appendChild(content);

    const toDoTitle = document.createElement('h2');
    toDoTitle.innerHTML = 'What to do?...';
    content.appendChild(toDoTitle);

    const nav = document.createElement('nav');

    // return to all projects
    const homeBtn = document.createElement('button');
    homeBtn.id = 'home';
    homeBtn.innerHTML = 'Home';
    nav.appendChild(homeBtn);

    const addItemBtn = document.createElement('button');
    addItemBtn.id = 'add';
    addItemBtn.innerHTML = '+';
    nav.appendChild(addItemBtn);

    content.appendChild(nav);

};

export default pageOnLoad;