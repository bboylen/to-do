import {switchProjectTasks} from "./tasks"

class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}

// add scroll bar to project list?
// limit project title length

function addProjectListeners() {
  // Project List
  let projectList = Array.from(
    document.getElementsByClassName("project-list")[0].children
  );
  projectList.forEach((element) => {
    element.addEventListener("click", updateProjectFromEvent);
  });

  // Add project
  let addProjectDiv = document.getElementsByClassName("add-project")[0];
  addProjectDiv.addEventListener("click", addProject);
}

// Figure out how to pass projectList as parameter

function updateProjectFromEvent(event) {
  let projectSelected = event.target;
  switchProject(projectSelected);
}

function switchProject(projectSelected) {
  switchSidebarProject(projectSelected);
  switchMainContentProject(projectSelected);
}

function switchSidebarProject(projectSelected) {
  projectSelected.classList.add("selected");
  let projectList = Array.from(
    document.getElementsByClassName("project-list")[0].children
  );

  let notSelected = projectList.filter((project) => project != projectSelected);
  for (let project of notSelected) project.classList.remove("selected");
}

function switchMainContentProject(projectSelected) {
  let projectSelectedDiv = document.getElementById("project-selected-header");
  projectSelectedDiv.textContent = projectSelected.textContent;
  switchProjectTasks(projectSelected.textContent);
}

function addProject(event) {
  let addProjectDiv = event.target;
  addProjectDiv.textContent = "";
  addProjectDiv.removeEventListener("click", addProject);

  // create input/buttons
  let inputWrapper = document.createElement("div");
  addProjectDiv.appendChild(inputWrapper);

  let projectInput = document.createElement("input");
  projectInput.id = "project-input";
  let projectCreate = document.createElement("a");
  projectCreate.textContent = "Add";
  let projectCancel = document.createElement("a");
  projectCancel.textContent = "Cancel";
  let elements = [projectInput, projectCreate, projectCancel];

  // append them to addProjectDiv
  for (let element of elements) {
    inputWrapper.appendChild(element);
  }

  // set click behavior
  projectCreate.addEventListener("click", createProjectFromEvent);
  document.addEventListener("keypress", projectEnter);
  projectCancel.addEventListener("click", closeAddProjectFromEvent);
}

function projectEnter(e) {
  if (e.key === "Enter") {
    let addProjectDiv = document.getElementsByClassName("add-project")[0];
    let projectInputValue = addProjectDiv.firstChild.firstChild.value;
    if (projectInputValue !== "") {
      createProject(addProjectDiv.firstChild.firstChild.value);
      closeAddProject(addProjectDiv);
      document.removeEventListener("keypress", projectEnter);
    } else {
      projectCreationFailed();
    }
  }
}

function createProjectFromEvent(event) {
  let projectInputValue = event.target.parentElement.firstChild.value;
  if (projectInputValue !== "") {
    createProject(projectInputValue);
    closeAddProject(event.target.parentElement.parentElement);
  } else {
    projectCreationFailed();
  }
}

function projectCreationFailed() {
  let projectInput = document.getElementById("project-input");
  projectInput.classList.add("failed");
  projectInput.placeholder = "Please add title";
}

function createProject(title) {
  let newProject = new Project(title);

  let projectList = localStorage.getItem("projectList");
  projectList = projectList ? JSON.parse(projectList) : [];
  projectList.push(newProject);
  window.localStorage.setItem("projectList", JSON.stringify(projectList));

  addProjectDOM(newProject);
}

function addProjectDOM(project) {
  let paraTag = document.createElement("p");
  paraTag.textContent = project.title;

  let list = document.getElementsByClassName("project-list")[0];
  paraTag.textContent = project.title;
  list.appendChild(paraTag);
}

function closeAddProjectFromEvent(event) {
  closeAddProject(event.target.parentElement.parentElement);
}

function closeAddProject(addProjectDiv) {
  while (addProjectDiv.firstChild) {
    addProjectDiv.removeChild(addProjectDiv.lastChild);
  }

  addProjectDiv.textContent = "Add Project +";

  // MOVE THIS
  addProjectListeners();
}

function selectProject() {
  
}
export { Project, addProjectListeners, createProject, addProjectDOM, switchProject};
