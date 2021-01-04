import {createProject} from "./projects"
import {addTask} from "./tasks"

function initDefaultProjects() {
  console.log("d")
  createProject("Work");
  createProject("Home");
  createProject("Health");
  
  createWorkTasks();
}

function createWorkTasks() {
  let workProject = JSON.parse(localStorage.projectList).filter(
    project => project.title === "Work"
  )[0];

  addTask(workProject, "Code", "blarg", "12/20/20");
  addTask(workProject, "Call John", "bar", "01/04/21");
}

export default initDefaultProjects; 