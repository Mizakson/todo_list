const body = document.querySelector('body');

function createHeader() {
    const header = document.createElement('div');
    header.id = 'header'

    // title creation
    const titleContainer = document.createElement('div');
    titleContainer.id = 'title';
    
    const mainText = document.createElement('h1');
    mainText.innerText = 'ToDo List';
    titleContainer.appendChild(mainText);

    const projNumber = document.createElement('p');
    projNumber.innerText = 'Odin Project JavaScript Course Project #4';
    titleContainer.appendChild(projNumber);

    const aboutText = document.createElement('p');
    aboutText.innerText = 'A program by Mizakson';
    titleContainer.appendChild(aboutText);

    header.appendChild(titleContainer);


    // nav creation
    const navContainer = document.createElement('div');
    navContainer.id = 'nav';

    const homeBtn = document.createElement('button');
    homeBtn.id = 'home';
    homeBtn.innerText = 'Home';

    navContainer.appendChild(homeBtn);

    header.appendChild(navContainer);

    body.appendChild(header);
};


function createContent() {
    const contentContainer = document.createElement('div');
    contentContainer.id = 'content';

    const contentHeader = document.createElement('div');
    contentHeader.id = 'content-header';

    const whatToDo = document.createElement('h1');

    whatToDo.innerText = 'What to do?...';

    contentHeader.appendChild(whatToDo);

    contentContainer.appendChild(contentHeader);

    body.appendChild(contentContainer);
};

function pageOnLoad() {
    createHeader();
    createContent();
};

export default pageOnLoad;