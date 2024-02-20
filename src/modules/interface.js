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
    const body = document.querySelector('.main');

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

};

function createForm() {
    const body = document.querySelector('.main');
    
    const formDisplay = createBasicEl('div','form-display','','');
    const form = createBasicEl('form','item-form','','');

    form.innerHTML += `
    <h2 id='form-title'>What to do?...</h2>
    <fieldset>
        <label for='type'>Type: </label>
            <select name='type' id='type'>
                <option value='project'>Project</option>
                <option value='task'>Task</option>
            </select>        
    </fieldset>
    <fieldset>
        <label for='name'>Name: </label>
        <input type='text' id='name' maxlength='75' placeholder=' -- Enter text here -- '>
    </fieldset>
    <fieldset>
        <label for='date'>Date: </label>
        <input type='text' id='date' maxlength='25' placeholder=' -- mm/dd/yy -- '>
    </fieldset>
    <fieldset>
        <label for='priority'>Priority: </label>
            <select name='priority' id='priority'>
                <option value='low'>Low</option>
                <option value='mid'>Mid</option>
                <option value='high'>High</option>
            </select>
    </fieldset>
    <button id='form-submit' type='submit'>Add item</button>

    `

    formDisplay.appendChild(form);
    body.appendChild(formDisplay);

};

function createDisplay() {
    createBasicEl('div','display','','');
}

function pageOnLoad() {
    createHeader();
    createForm();
    createDisplay();
};

export default pageOnLoad;