const body = document.querySelector('body');

function createTitle() {
    const titleContainer = document.createElement('div');
    titleContainer.id = 'title';
    
    const mainText = document.createElement('h1');
    mainText.classList.add('main header');
    titleContainer.appendChild(mainText);

    const projNumber = document.createElement('p');
    projNumber.innerText = 'Odin Project JavaScript Course Project #4';
    titleContainer.appendChild(projNumber);

    const aboutText = document.createElement('p');
    aboutText.innerText = 'A program by Mizakson';
    titleContainer.appendChild(aboutText);

    body.appendChild(titleContainer);
};

function createNav() {
    const navContainer = document.createElement('div');
    navContainer.id = 'nav';

    const homeLink = document.createElement('a');
    homeLink.id = 'home';
    homeLink.innerText = 'Home';

    navContainer.appendChild(homeLink);

    body.appendChild(navContainer);
};

function createContent() {
    const contentContainer = document.createElement('div');
    contentContainer.id = 'content';

    const whatToDo = document.createElement('h1');
    whatToDo.classList.add('content header');

    whatToDo.innerText = 'What to do?...';

    contentContainer.appendChild(whatToDo);

    body.appendChild(contentContainer);
};

function pageOnLoad() {
    createTitle();
    createNav();
    createContent();
};

export default pageOnLoad;