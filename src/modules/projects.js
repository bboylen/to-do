class Project {
  constructor(title) {
    this.title = title;
  }
}

function addProjectListeners() {
  let projectList = Array.from(
    document.getElementsByClassName("project-list")[0].children
  );
  projectList.forEach((element) => {
    element.addEventListener("click", updateProject);
  });
}

// Figure out how to pass projectList as parameter

function updateProject(e) {

  // sidebar project function
  let projectSelected = e.target;
  projectSelected.classList.add("selected");
  let projectList = Array.from(
    document.getElementsByClassName("project-list")[0].children
  );

  let notSelected = projectList.filter((project) => project != projectSelected);
  for (let project of notSelected) project.classList.remove("selected");

  // main content project function
  switchMainContentProject(e);
}

function switchMainContentProject(e) {
  let projectSelected = e.target;
  let projectSelectedDiv = document.getElementById("project-selected-header");
  projectSelectedDiv.textContent = projectSelected.textContent;
}

export { Project, addProjectListeners };
