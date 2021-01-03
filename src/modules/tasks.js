class Task {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
  }
}

function addTask(project, title, description, date) {
  let task = new Task(title, description, date);
  project.tasks.push(task);
  // add task dom, save project to localstorage
}

function switchProjectTasks(selectedProjectTitle) {
  let selectedProject = JSON.parse(window.localStorage.projectList).filter(
    (project) => project.title === selectedProjectTitle
  )[0];

  clearProjectTasks();
  populateProjectTasks(selectedProject);
}

function clearProjectTasks() {
  let taskList = document.getElementsByClassName("list-items")[0];

  while (taskList.firstChild) {
    taskList.removeChild(taskList.lastChild)
  }
}

function populateProjectTasks() {

}

export { Task, addTask, switchProjectTasks };
