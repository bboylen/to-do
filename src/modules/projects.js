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
    element.addEventListener("click", updateProject);
  });

  // Add project
  let addProjectDiv = document.getElementsByClassName("add-project")[0];
  addProjectDiv.addEventListener("click", addProject);
}

// Figure out how to pass projectList as parameter

function updateProject(event) {
  let projectSelected = event.target;

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
}

function addProject(event) {
  let addProjectDiv = event.target;
  addProjectDiv.textContent = "";
  addProjectDiv.removeEventListener("click", addProject);
  // create input/buttons
  let inputWrapper = document.createElement("div");
  addProjectDiv.appendChild(inputWrapper);

  let projectInput = document.createElement("input");
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
  projectCancel.addEventListener("click", closeAddProject);
}

function createProjectFromEvent(event) {
  let projectInputValue = event.target.parentElement.firstChild.value;
  createProject(projectInputValue);
  closeAddProject(event);
}

function createProject(title) {
  let newProject = new Project(title);
  console.log(newProject);

  let projectList = localStorage.getItem("projectList");
  projectList = (projectList) ? JSON.parse(projectList) : [];
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

function closeAddProject(event) {
  let addProjectDiv = event.target.parentElement.parentElement;

  while (addProjectDiv.firstChild) {
    addProjectDiv.removeChild(addProjectDiv.lastChild);
  }

  addProjectDiv.textContent = "Add Project +";

  // MOVE THIS
  addProjectListeners();
}
export { Project, addProjectListeners, createProject, addProjectDOM};
