// import necessary modules
import { arr } from "./modules/model/model";
import { arrController } from "./modules/controller/controller";
import { config } from "./modules/view/view";
import Project from "./modules/model/project";
import { storageMethods } from "./modules/model/storage";

const app = (function () {
    config.pageOnLoad();
    storageMethods.checkStorage();
})();
