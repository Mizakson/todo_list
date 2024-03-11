// import necessary modules
import { arr } from "./modules/model/model";
import { arrController } from "./modules/controller/controller";
import { config } from "./modules/view/view";
import Project from "./modules/model/project";

function checkStorage() {
    if (localStorage.length === 0) {
        config.defaultRender();
    }
    
}


function buttonEvents() {

}


const app = (function () {
    config.pageOnLoad();
    checkStorage();
})();

