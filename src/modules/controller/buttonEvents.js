export var btnEvents = (function () {
    
    const projectBtnEvents = () => {
        let projects = Array.from(document.querySelector('.display').childNodes);

        projects.forEach(function(item,index) {
            let projectEls = Array.from(item.children);
            let header = Array.from(item.childNodes[0].childNodes);
            // console.log(header);
            let btns = Array.from(header[1].children);
            
            // 0 - details, 1 - add task, 2 - delete, 3 - toggle 

            btns[1].addEventListener("click", function(e) {
                projectEls[1].classList.toggle('active');
            })

            console.log(btns);
        })
    }

    return { projectBtnEvents };

})();