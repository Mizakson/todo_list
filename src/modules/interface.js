import Task from "./todo.js";
import Project from "./project.js";

function pageOnLoad() {
    const body = document.querySelector('body');
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title');

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

export default pageOnLoad;