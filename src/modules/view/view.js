import { storageState } from "../model/model";
import Project from "../model/project";
import { arr } from "../model/model";
import Task from "../model/task";

export const config = (function () {

    const content = document.querySelector('.content');

    const createAppHeader = () => {
        let appHeaderContainer = uiMethods.createContainer('app-header','');
        let appTitle = uiMethods.createEl('h1','app-title','','To Do List App');
        let appAbout = uiMethods.createEl('h4','app-about','','Odin Project JavaScript Course Project 4');
        let appCredit = uiMethods.createEl('p','app-credit','','A program by Mizakson');

        appHeaderContainer.appendChild(appTitle);
        appHeaderContainer.appendChild(appAbout);
        appHeaderContainer.appendChild(appCredit);

        content.appendChild(appHeaderContainer);
    }


    const createProjectForm = () => {
        let container = uiMethods.createContainer('project-form-container','');
        let header = uiMethods.createContainer('project-form-header','');
        let formTitle = uiMethods.createEl('h2','project-form-title','','What to do?...');

        header.appendChild(formTitle);
        container.appendChild(header);
        
        let formContainer = uiMethods.createContainer('add-project-form-container','');

        let form = uiMethods.createEl('form','add-project-form','','');
        form.innerHTML = `
        
        <input type='text' maxlength='35' placeholder=' -- Project Title -- ' id='add-project-title'>
        <div class='gap'></div>

        <button type='submit' id='add-project-submit'>Create Project</button>

        `
        formContainer.appendChild(form);
        container.appendChild(formContainer);
        content.appendChild(container);

    }


    const createDisplay = () => {
        let display = uiMethods.createContainer('display','');
        content.appendChild(display);
    }

    
    const pageOnLoad = () => {
        createAppHeader();
        createProjectForm();
        createDisplay();
    }

    // only blank render when storage is empty
    const defaultRender = () => {
        console.log('localStorage is empty',storageState);
    }   

    
    const nonEmptyRender = () => {
        for (let i = 0; i < localStorage.length; i++) {
            let projectVal = localStorage.getItem(localStorage.key(i));
            let parsedProj = JSON.parse(projectVal);
            Object.setPrototypeOf(projectVal,Project);
            arr.push(parsedProj);

            let card = uiMethods.createContainer('card',`card-${i}`);
            let header = uiMethods.createContainer('card-header','');
            let projText = uiMethods.createEl('h4','card-header-text','',`${parsedProj['title']}`);
            header.appendChild(projText);
            
            let btns = uiMethods.createContainer('project-btns','');
            btns.innerHTML = `
            <button class='project-details'>Details</button>
            <button class='add-task'>Add Task</button>
            <button class='project-delete'>X</button>
            <button class='project-toggle'>Toggle</button>
            `
            header.appendChild(btns);
            card.appendChild(header);

            let addTaskFormContainer = uiMethods.createContainer('add-task-form-container','');
            addTaskFormContainer.innerHTML = `
            <form class='add-task-form' id='add-task-form-${i}'>
            <input type='text' maxlength='35' placeholder=' -- Task Title -- ' id='add-task-title-${i}'>
            <input type='text' maxlength='35' placeholder=' -- Task Description -- ' id='add-task-description-${i}'>
            <input type='text' maxlength='35' placeholder=' -- mm/dd/yy -- ' id='add-task-dueDate-${i}'>
            <input type='text' maxlength='35' placeholder=' -- Task Priority -- ' id='add-task-priority-${i}'>
    
            <button type='submit' id='add-task-submit-${i}'>Create Project</button>
            
            </form>
            `
            card.appendChild(addTaskFormContainer);

            let tasks = uiMethods.createContainer('tasks',`tasks-${i}`);

            // render tasks in each project
            for (let j = 0; j < arr[i].items.length; j++) {
                let currentTask = arr[i].items[j];
                Object.setPrototypeOf(currentTask,Task);
                console.log(arr[i].items[j]);
            }
            card.appendChild(tasks);
            
            document.querySelector('.display').appendChild(card);

          }
    }


    const clearDisplay = () => {
        document.querySelector('.display').innerHTML = "";
    }

    return { pageOnLoad, defaultRender, nonEmptyRender, clearDisplay }

})();


export const uiMethods = (function () {

    const createContainer = (cls,idName) => {
        let el = document.createElement('div');

        if (cls != '') {
            el.classList.add(cls);
        }
        
        if (idName != '') {
            el.id = idName;
        }
        
        return el;

    }

    const createEl = (tag,cls,idName,text) => {
        let el = document.createElement(tag);

        if (cls != '') {
            el.classList.toggle(cls);
        }

        if (idName != '') {
            el.id = idName;
        }

        if (text != '') {
            el.innerText = text;
        }

        return el;

    }

    return { createContainer, createEl };

})();