import { arr } from "../model/model";
import Project from "../model/project";

// modifies arr
export const arrController = (function () {

    const addProject = (item) => {
        arr.push(item);
    };

    const deleteProject = (index) => {
        arr.splice(index,1);
    }

    const getProject = (index) => {
        console.log(arr[index]);
    }

    return { addProject, deleteProject, getProject }

})();