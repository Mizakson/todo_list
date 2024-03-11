import Project from "./project";
import { config } from "../view/view";

export const storageMethods = (function () {

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

        })
    }

    return { saveToStorage };

})();
