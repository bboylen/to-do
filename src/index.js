import "./styles/reset.css";
import "./styles/styles.css";
import {Project, addProjectListeners, createProject, addProjectDOM} from "./modules/projects"
import {Task, addTask} from "./modules/tasks"
import initDefaultProjects from "./modules/defaultProjects"

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
  console.log("f")
  let projectList = JSON.parse(localStorage.projectList);
  // add to DOM
  for (let project of projectList) {
    addProjectDOM(project);
  }
}


function addInitialListeners() {

}

addProjectListeners();

