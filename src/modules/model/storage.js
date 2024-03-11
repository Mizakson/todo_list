import Project from "./project";
import { config } from "../view/view";
import { arr } from "./model";
import Task from "./task"
import { btnEvents } from "../controller/buttonEvents";

export const storageMethods = (function () {

    // only save a project to storage
    const saveToStorage = () => {
        const form = document.querySelector('.add-project-form');
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            let newTitle = document.getElementById('add-project-title').value;
            let newProj = new Project(newTitle);

            let str = JSON.stringify(newProj);
            localStorage.setItem(`${newTitle}`, str);

            config.clearDisplay();
            config.nonEmptyRender();
            btnEvents.projectBtnEvents();

        })

    }


    // update either project, or task (project.items[index])
    const updateStorage = (index) => {
        console.log(localStorage.getItem(localStorage.key(index)));
    }

    return { saveToStorage, updateStorage };

})();
