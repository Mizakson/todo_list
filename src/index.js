// import necessary modules
import { arr, storageState } from "./modules/model/model";
import { arrController } from "./modules/controller/controller";
import { config, uiMethods } from "./modules/view/view";
import Project from "./modules/model/project";
import { storageMethods } from "./modules/model/storage";
import { btnEvents } from "./modules/controller/buttonEvents";

const app = (function () {
    config.pageOnLoad();
    // check storage
    if (localStorage.length === 0) {
        console.log('empty', storageState);
        storageMethods.saveToStorage();
        let arr = [];
        console.log('empty model',arr);
        
    }
    else if (localStorage.length > 0) {
        storageState = true;
        console.log('not empty', storageState);
        config.nonEmptyRender();
        btnEvents.projectBtnEvents();
        storageMethods.saveToStorage();
    }

    
    


})();
