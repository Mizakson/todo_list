import Project from "./project";

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

        })
    }

    return { saveToStorage };

})();
