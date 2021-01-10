import {selectProject} from "./projects"

class Task {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
}

function addTask(selectedProject, title, date) {
  let task = new Task(title, date);
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
    insertTask(task);
  }
  insertAddTaskButton();
}

function insertTask(task) {
  let listDiv = document.getElementsByClassName("list-items")[0];
  let itemDiv = document.createElement("div");
  itemDiv.classList.add("item");
  let titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  let rightSideDiv = document.createElement("div");
  rightSideDiv.classList.add("date-trash-container");

  listDiv.appendChild(itemDiv);
  itemDiv.appendChild(titleDiv);
  itemDiv.appendChild(rightSideDiv);

  let dateDiv = document.createElement("div");
  dateDiv.classList.add("date");
  let deleteDiv = document.createElement("div");
  deleteDiv.classList.add("delete-task");

  rightSideDiv.appendChild(dateDiv);
  rightSideDiv.appendChild(deleteDiv);

  titleDiv.textContent = task.title;
  dateDiv.textContent = task.date;

  deleteDiv.addEventListener("click", deleteTask)
}

function deleteTask(e) {
  let taskDiv = e.target.parentElement.parentElement;
  removeTaskFromStorage(taskDiv);
  removeTaskFromDOM(taskDiv);
}

function removeTaskFromStorage(taskDiv) {
  let taskTitle = taskDiv.firstChild.textContent;
  let selectedProject = selectProject();
  let projectList = JSON.parse(localStorage.projectList);
 
  selectedProject.tasks = selectedProject.tasks.filter((task) => {
    return task.title !== taskTitle
  })

  let storedProjects = projectList.map((project) => {
    if (project.title === selectedProject.title) {
      return (project = selectedProject);
    }
    return project;
  });

  localStorage.setItem("projectList", JSON.stringify(storedProjects));  
}

function removeTaskFromDOM(taskDiv) {
  taskDiv.remove();
}

function insertAddTaskButton() {
  let listDiv = document.getElementsByClassName("list-items")[0];
  let addTaskDiv = document.createElement("div");
  addTaskDiv.classList.add("item", "task-button");
  listDiv.appendChild(addTaskDiv);

  let addTaskButton = document.createElement("button");
  addTaskDiv.appendChild(addTaskButton);
  addTaskButton.textContent = "Add Task +";
  
  addTaskButton.addEventListener("click", addTaskForm);
}

function addTaskForm() {
  let listDiv = document.getElementsByClassName("list-items")[0];
  listDiv.removeChild(listDiv.lastChild);
  generateTaskForm();
}

function generateTaskForm() {
  let taskForm = document.createElement("form");
  taskForm.classList.add("item");
  taskForm.id = "task-form";
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("create-task-div");
  taskForm.appendChild(taskDiv);

  let listDiv = document.getElementsByClassName("list-items")[0];
  listDiv.appendChild(taskForm);

  let titleInput = document.createElement("input");
  taskDiv.appendChild(titleInput);
  titleInput.id = "task-title";
  titleInput.placeholder = "Task title here:"
  let dateInput = document.createElement("input");
  taskDiv.appendChild(dateInput);
  dateInput.id = "task-date";
  dateInput.placeholder = "Date:"
  dateInput.setAttribute("data-provide", "datepicker");

  let submitDiv = document.createElement("div");
  submitDiv.id = "form-submit-div";
  taskForm.appendChild(submitDiv);
  let submitButton = document.createElement("input");
  submitButton.id = "form-submit-button";
  submitButton.type = "submit";
  submitButton.value = "Create Task";
  submitDiv.appendChild(submitButton);
  let cancelButton = document.createElement("button");
  cancelButton.id = "form-cancel-button";
  cancelButton.textContent = "Cancel";
  submitDiv.appendChild(cancelButton);

  cancelButton.addEventListener("click", closeAddTask);
  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    createTaskFromForm(event.target);
  });
}

function createTaskFromForm(form) {
  let newTask = getTaskFormData(form);
  let project = selectProject();
  addTask(project, newTask.title, newTask.date);
  document.getElementById("task-form").remove();
  insertTask(newTask);
  insertAddTaskButton();
}

function getTaskFormData(form) {
  let title = form[0].value;
  let date = form[1].value;
  return new Task(title, date);
}

function closeAddTask() {
  let taskForm = document.getElementById("task-form");
  taskForm.remove();
  insertAddTaskButton();
}

export { Task, addTask, switchProjectTasks, populateProjectTasks };
