import Project from "./modules/project.js"
import Task from "./modules/todo.js"

const DEFAULT_PROJ = new Project('default','default project', 'X', 'X', 'note');
console.log(DEFAULT_PROJ);

DEFAULT_PROJ.addProject('')