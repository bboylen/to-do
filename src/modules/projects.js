class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}

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
  
  let projectInput = document.createElement("input");
  let projectCreate = document.createElement("a");
  projectCreate.textContent = "Add";
  let projectCancel = document.createElement("a");
  projectCancel.textContent = "Cancel";
  let elements = [projectInput, projectCreate, projectCancel];
  
  // append them to addProjectDiv
  for (let element of elements) {
    addProjectDiv.appendChild(element);
  }

  // set click behavior
}

export { Project, addProjectListeners };
