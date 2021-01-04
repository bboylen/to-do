class Task {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
  }
}

function addTask(selectedProject, title, description, date) {
  let task = new Task(title, description, date);
  selectedProject.tasks.push(task);

  let storedProjects = JSON.parse(localStorage.projectList);
  storedProjects = storedProjects.map((project) => {
    if (project.title === selectedProject.title) {
      return (project = selectedProject);
    }
    return project;
  });

  window.localStorage.setItem("projectList", JSON.stringify(storedProjects));
}

function switchProjectTasks(selectedProjectTitle) {
  let selectedProject = JSON.parse(localStorage.projectList).filter(
    (project) => project.title === selectedProjectTitle
  )[0];

  clearProjectTasks();
  populateProjectTasks(selectedProject);
}

function clearProjectTasks() {
  let taskList = document.getElementsByClassName("list-items")[0];

  while (taskList.firstChild) {
    taskList.removeChild(taskList.lastChild);
  }
}

function populateProjectTasks(selectedProject) {
  for (let task of selectedProject.tasks) {
    let listDiv = document.getElementsByClassName("list-items")[0];
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    let dateDiv = document.createElement("div");
    dateDiv.classList.add("date");

    listDiv.appendChild(itemDiv);
    itemDiv.appendChild(titleDiv);
    itemDiv.appendChild(dateDiv);

    titleDiv.textContent = task.title;
    dateDiv.textContent = task.date;
  }
}

export { Task, addTask, switchProjectTasks };
