import "./styles/reset.css";
import "./styles/styles.css";
import {Project, addProjectListeners, createProject, addProjectDOM} from "./modules/projects"

(function initializeProjects() {
  if (window.localStorage.length > 0) {
    initStoredProjects();
  } else {
    let projectList = [];
    window.localStorage.setItem("projectList", projectList);
    initDefaultProjects();
  }
})();

function initStoredProjects() {
  let projectList = JSON.parse(window.localStorage.projectList);
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