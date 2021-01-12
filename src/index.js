import "./styles/reset.css";
import "./styles/styles.css";
import {addProjectListeners, addProjectDOM, switchProject} from "./modules/projects"
import initDefaultProjects from "./modules/defaultProjects"

(function initializeProjects() {
  if (localStorage.length > 0) {
    initStoredProjects();
    initFirstProject();
    addProjectListeners();
  } else {
    let projectList = [];
    localStorage.setItem("projectList", projectList);
    initDefaultProjects();
    initFirstProject();
    addProjectListeners();
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

(function addtoggleSideBarListener() {
  let sideToggle = document.getElementById("project-tab-toggle");
  sideToggle.addEventListener("click", toggleSideBar);
})();

function toggleSideBar(event) {
  let sideToggle = event.target;
  let sideBar = document.getElementsByClassName("side-info")[0];
  if (sideBar.classList.contains("activated")) {
    sideBar.classList.remove("activated");
  } else {
    sideBar.classList.add("activated");
  }
}

(function addSideBarListener() {
  window.addEventListener("resize", addSideToggleBehavior)
})();

function addSideToggleBehavior() {
  let sideBar = document.getElementsByClassName("side-info")[0];
  console.log("f");
  if (window.innerWidth > 768) {
    sideBar.classList.remove("activated");
  }
}

// Add ordering for tasks
// Add expansion for project tab
// make cdns host locally
//add scroll bar for projects
