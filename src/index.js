import "./styles/reset.css";
import "./styles/styles.css";
import {addProjectListeners, addProjectDOM, switchProject} from "./modules/projects"
import initDefaultProjects from "./modules/defaultProjects"

(function initializeProjects() {
  if (localStorage.length > 0) {
    initStoredProjects();
    initFirstProject();
    addListeners();
  } else {
    let projectList = [];
    localStorage.setItem("projectList", projectList);
    initDefaultProjects();
    initFirstProject();
    addListeners();
  }
})();

function initStoredProjects() {
  let projectList = JSON.parse(localStorage.projectList);
  
  for (let project of projectList) {
    addProjectDOM(project);
  }
}

function initFirstProject() {
  let firstProjectDiv = document.getElementsByClassName("project-list")[0].firstElementChild;
  switchProject(firstProjectDiv);
}

function addListeners() {
  addProjectListeners();
  addtoggleSideBarListener();
  addSideBarListener();
}

function addtoggleSideBarListener() {
  let sideToggle = document.getElementById("project-tab-toggle");
  sideToggle.addEventListener("click", toggleSideBar);
};

function toggleSideBar(event) {
  let sideToggle = event.target;
  let sideBar = document.getElementsByClassName("side-info")[0];
  if (sideBar.classList.contains("activated")) {
    sideBar.classList.remove("activated");
  } else {
    sideBar.classList.add("activated");
  }
}

function addSideBarListener() {
  window.addEventListener("resize", addSideToggleBehavior)
};

function addSideToggleBehavior() {
  let sideBar = document.getElementsByClassName("side-info")[0];
  if (window.innerWidth > 768) {
    sideBar.classList.remove("activated");
  }
}

// add date sort