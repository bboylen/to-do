import "./styles/reset.css";
import "./styles/styles.css";
import {Project, addProjectListeners, createProject, addProjectDOM} from "./modules/projects"
import {Task, addTask} from "./modules/tasks"

(function initializeProjects() {
  if (localStorage.length > 0) {
    initStoredProjects();
  } else {
    let projectList = [];
    localStorage.setItem("projectList", projectList);
    initDefaultProjects();
  }
})();

function initStoredProjects() {
  let projectList = JSON.parse(localStorage.projectList);
  // add to DOM
  for (let project of projectList) {
    addProjectDOM(project);
  }
}

function initDefaultProjects() {
  
  createProject("Work");
  createProject("Home");
  createProject("Health");
}

function addInitialListeners() {

}

addProjectListeners();

(function saveTask() {
  let projectList = JSON.parse(localStorage.projectList);
  let workProject = projectList[0];
  addTask(workProject, "Run", "Blarg", "2005");
})();