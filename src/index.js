import Project from "./modules/project.js";
import Task from "./modules/task.js";

const DEFAULT_PROJECT = new Project('DEFAULT','N/A','N/A','N/A','N/A','N/A');

let TASK1 = new Task('Go food shopping', '', '2024-06-07', 'mid', 'buy apples, milk');

DEFAULT_PROJECT.additem(TASK1);
