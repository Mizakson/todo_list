import { config } from "../view/view";
import { arr } from "../model/model";
import Project from "../model/project";
import Task from "../model/task";
import { storageMethods } from "../model/storage";

export var btnEvents = (function () {
    
    const projectBtnEvents = () => {
        let projects = Array.from(document.querySelector('.display').childNodes);

        projects.forEach(function(item,index) {
            let projectEls = Array.from(item.children);
            let header = Array.from(item.childNodes[0].childNodes);
            // console.log(header);
            let btns = Array.from(header[1].children);
            
            // 0 - details, 1 - add task, 2 - delete, 3 - toggle 

            // displays all tasks
            btns[0].addEventListener("click", function() {
                console.log(projectEls);
                projectEls[2].classList.toggle('active');
            })

            // display add task form
            btns[1].addEventListener("click", function() {
                projectEls[1].classList.toggle('active');
                let taskForm = projectEls[1].children[0];
                console.log(taskForm.children);
                
                taskForm.addEventListener("submit", function(e) {
                    e.preventDefault();
                    e.stopImmediatePropagation();

                    // 0 - title, 1 - desc, 2 - dueDate, 3 - priority
                    let title = taskForm.children[0].value;
                    let desc = taskForm.children[1].value;
                    let dueDate = taskForm.children[2].value;
                    let prio = taskForm.children[3].value;

                    const newTask = new Task(title, desc, dueDate, prio);

                    storageMethods.updateTaskStorage(index, newTask);

                    config.clearDisplay();
                    config.nonEmptyRender();
                    btnEvents.projectBtnEvents();
                })

            })

            btns[2].addEventListener("click", function() {
                let name = header[0].innerText;
                localStorage.removeItem(name);  
                config.clearDisplay();
                config.nonEmptyRender();
                projectBtnEvents();        
            })

            // update status 
            btns[3].addEventListener("click", function() {
                let name = header[0].innerText;
                let prevStr = localStorage.getItem(name);
                let prevItem = JSON.parse(prevStr);
                prevItem.status = !prevItem.status;
                
                let newStr = JSON.stringify(prevItem);
                localStorage.setItem(name,newStr);

                let newItem = JSON.parse(newStr);
                
                arr.splice(index,1,newItem);
                Object.setPrototypeOf(newItem, Project);
                console.log(`Project-${name}: status -> ${newItem.status}`);

            })

            // sub cards inside of tasks-${index} container
            let taskCards = Array.from(item.children[2].children);
            taskCards.forEach(function(subItem,subIndex) {
                const taskCardEls = Array.from(subItem.children);

                // 0 - task card (title, dueDate, buttons-div ), 1 - details, 2 - edit task form
                console.log(taskCardEls);
                const singleCard = taskCardEls[0];
                const singleDetails = taskCardEls[1];
                const singleEditForm = taskCardEls[2];

                const singleCardEls = Array.from(singleCard.children);
                const singleCardBtns = Array.from(singleCardEls[2].children);

                // console.log(singleCardBtns);

                // 0 - details, 1 - edit, 2 - delete, 3 - toggle
                singleCardBtns[0].addEventListener("click", function(e) {
                    e.preventDefault();
                    singleDetails.classList.toggle('secondary-active');

                });

                singleCardBtns[1].addEventListener("click", function(e) {
                    e.preventDefault();
                   singleEditForm.classList.toggle('active');

                   // form submit here

                });

                // delete event here


                // toggle event here

            })
            
        })
    }

    return { projectBtnEvents };

})();