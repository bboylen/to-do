import "./styles/reset.css";
import "./styles/styles.css";
import {addProjectListeners, addProjectDOM, switchProject} from "./modules/projects"
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
  let firstProjectDiv = document.getElementsByClassName("project-list")[0].firstElementChild;
  switchProject(firstProjectDiv);
}

addProjectListeners();

// Add ordering for tasks
// Add expansion for project tab
// make cdns host locally
