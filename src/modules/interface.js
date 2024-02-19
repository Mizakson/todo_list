// ui creation functions

// cls === class name
function createBasicEl(tag, cls, idName, text) {
    const el = document.createElement(`${tag}`);

    if (cls != '') {
        el.classList.add(`${cls}`);
    }
    
    if (idName != '') {
        el.id = idName;
    }
    
    if (text != '') {
        el.innerText = text;
    }
    
    return el;
};


function createHeader() {
    const body = document.querySelector('body');

    const header = createBasicEl('div','header','','');
    const title = createBasicEl('div','title-container','','');
    const projTitle = createBasicEl('h1','title','project-title','To Do List');
    const projDesc = createBasicEl('h2','','project-description','Odin Project JavaScript Course Project #4');
    const projCredits = createBasicEl('p','','project-credits', 'A program by Mizakson');

    title.appendChild(projTitle);
    title.appendChild(projDesc);
    title.appendChild(projCredits);
    header.appendChild(title);
    body.appendChild(header);

}

function pageOnLoad() {
    createHeader();
};

export default pageOnLoad;