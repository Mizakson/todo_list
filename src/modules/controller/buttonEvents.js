import { config } from "../view/view";
import { arr } from "../model/model";
import Project from "../model/project";

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

            
        })
    }

    return { projectBtnEvents };

})();