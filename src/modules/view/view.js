export const config = (function () {

    const content = document.querySelector('.content');

    const createAppHeader = () => {
        let appHeaderContainer = uiMethods.createContainer('app-header');
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
        
        let form = uiMethods.createEl('form','add-project-form','','');
        form.innerHTML = `
        
        <input type='text' maxlength='35' placeholder=' -- Project Title -- ' id='add-project-title'>
        <div class='gap'></div>

        <button type='submit' id='add-project-submit'>Create Project</button>

        `

        container.appendChild(form);
        content.appendChild(container);

    }


    const createDisplay = () => {
        let display = uiMethods.createContainer('display');
        content.appendChild(display);
    }

    
    const pageOnLoad = () => {
        createAppHeader();
        createProjectForm();
        createDisplay();
    }


    const render = () => {

    }


    return { pageOnLoad, render }

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