// import necessary modules
import { arr, storageState } from "./modules/model/model";
import { arrController } from "./modules/controller/controller";
import { config, uiMethods } from "./modules/view/view";
import Project from "./modules/model/project";
import { storageMethods } from "./modules/model/storage";

const app = (function () {
    config.pageOnLoad();
    storageMethods.saveToStorage();

    // check storage
    if (localStorage.length === 0) {
        console.log('empty', storageState);
    }
    else if (localStorage.length > 0) {
        storageState = true;
        console.log('not empty', storageState);
        
        // nonEmptyRender here
    }

})();
