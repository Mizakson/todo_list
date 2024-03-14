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

            let defaultTask = new Task('default task','edit me...','12/31/24','low');
            newProj.addTask(defaultTask);

            let str = JSON.stringify(newProj);
            localStorage.setItem(`${newTitle}`, str);

            config.clearDisplay();
            config.nonEmptyRender();
            btnEvents.projectBtnEvents();

        })

    }




    // update task (project.items[index])
    const updateStorage = (index, newTask) => {
        const currentProjectKey = localStorage.getItem(localStorage.key(index));
        const currentProject = arr[index];

        const taskForm = document.querySelector(`#add-task-form-${index}`);
        console.log(taskForm);
        
        currentProject.items.push(newTask);
        console.log(currentProject);

        const newStr = JSON.stringify(currentProject);
        localStorage.setItem(currentProject['title'],newStr);

    }

    return { saveToStorage, updateStorage };

})();
