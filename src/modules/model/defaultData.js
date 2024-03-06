import Project from "./project";
import Task from "./task";
import { arrController } from "../controller/controller";

export function addDefaultData() {

    let test_project1 = new Project('Invent time travel');
    let test_task1 = new Task('Study physics','read physics textbooks','12/31/50','low');
    test_project1.addTask(test_task1);

    let test_project2 = new Project('Climb Mt. Everest');
    let test_task2 = new Task('Go hiking','build up stamina','6/15/45','low');
    test_project2.addTask(test_task2);

    arrController.addProject(test_project1);
    arrController.addProject(test_project2);

}