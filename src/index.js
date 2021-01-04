import "./styles/reset.css";
import "./styles/styles.css";
import {Project, addProjectListeners, createProject, addProjectDOM, switchProject} from "./modules/projects"
import {Task, addTask, populateProjectTasks} from "./modules/tasks"
import initDefaultProjects from "./modules/defaultProjects"

(function initializeProjects() {
  if (localStorage.length > 0) {
    initStoredProjects();
    initFirstProject();
  } else {
    let projectList = [];
    localStorage.setItem("projectList", projectList);
    initDefaultProjects();
    initFirstProject();
  }
})();

function initStoredProjects() {
  let projectList = JSON.parse(localStorage.projectList);
  // add to DOM
  for (let project of projectList) {
    addProjectDOM(project);
  }
}

function initFirstProject() {
  let firstProject = JSON.parse(localStorage.projectList)[0];
  let firstProjectDiv = document.getElementsByClassName("project-list")[0].firstElementChild;
  switchProject(firstProjectDiv);
}

addProjectListeners();

// Make dates actual dates 
// Add ordering for tasks
// Add expansion for tasks
// recurring tasks