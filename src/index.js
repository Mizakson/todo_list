import Project from "./modules/project.js"
import Task from "./modules/todo.js"

const DEFAULT_PROJ = new Project('default','default project', 'X', 'X', 'note');

DEFAULT_PROJ.addProject('proj1','seeing if it works','3/3/24','low','other note');
DEFAULT_PROJ.showItem(0);

DEFAULT_PROJ.createTask('task1','seeing if it works','6/6/25','low','task notes');
console.log(DEFAULT_PROJ);