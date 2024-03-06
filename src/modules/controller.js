import { arr } from "./model";

// modifies arr
export const arrController = (function () {

    const addProject = (item) => {
        arr.push(item);
    };

    const deleteProject = (index) => {
        arr.splice(index,1);
    }

    return { addProject, deleteProject }

})();