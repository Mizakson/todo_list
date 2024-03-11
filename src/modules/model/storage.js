export const storageMethods = (function () {
    const checkStorage = () => {
        console.log(localStorage.length);
    }

    const saveToStorage = () => {
        const form = document.querySelector('.add-project-form');
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log(document.getElementById('add-project-title').value);
        })
    }

    return { checkStorage, saveToStorage };

})();
