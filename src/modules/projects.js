import { switchProjectTasks } from "./tasks";

class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}

function addProjectListeners() {
  let projectList = Array.from(
    document.getElementsByClassName("project-list")[0].children
  );
  projectList.forEach((element) => {
    element.addEventListener("click", updateProjectFromEvent);
  });

  let addProjectDiv = document.getElementsByClassName("add-project")[0];
  addProjectDiv.addEventListener("click", addProject);
}

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

  let inputWrapper = document.createElement("div");
  addProjectDiv.appendChild(inputWrapper);

  let projectInput = document.createElement("input");
  projectInput.id = "project-input";
  let projectCreate = document.createElement("a");
  projectCreate.textContent = "Add";
  let projectCancel = document.createElement("a");
  projectCancel.textContent = "Cancel";
  let elements = [projectInput, projectCreate, projectCancel];

  for (let element of elements) {
    inputWrapper.appendChild(element);
  }

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
      addProjectListeners();
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
    addProjectListeners();
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
  list.appendChild(paraTag);
}

function closeAddProjectFromEvent(event) {
  closeAddProject(event.target.parentElement.parentElement);
  addProjectListeners();
}

function closeAddProject(addProjectDiv) {
  while (addProjectDiv.firstChild) {
    addProjectDiv.removeChild(addProjectDiv.lastChild);
  }

  addProjectDiv.textContent = "Add Project +";
}

function selectProject() {
  let projectTitle = document.getElementById("project-selected-header")
    .textContent;

  return JSON.parse(localStorage.projectList).filter(
    (project) => project.title === projectTitle
  )[0];
}

export {
  Project,
  addProjectListeners,
  createProject,
  addProjectDOM,
  switchProject,
  selectProject,
};
