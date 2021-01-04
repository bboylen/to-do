import {createProject} from "./projects"
import {addTask} from "./tasks"

function initDefaultProjects() {
  createProject("Work");
  createProject("Home");
  createProject("Health");
  
  createWorkTasks();
  createHomeTasks();
  createHealthTasks();
}

function createWorkTasks() {
  let workProject = JSON.parse(localStorage.projectList).filter(
    project => project.title === "Work"
  )[0];

  addTask(workProject, "Code", "blarg", "12/20/20");
  addTask(workProject, "Call John", "bar", "01/04/21");
  addTask(workProject, "Finish Drawings", "For Distillation Column", "01/08/21");
}

function createHomeTasks() {
  let homeProject = JSON.parse(localStorage.projectList).filter(
    project => project.title === "Home"
  )[0];

  addTask(homeProject, "Clean bathroom", "", "01/05/21");
  addTask(homeProject, "Buy decorations", "", "01/06/21");
  addTask(homeProject, "Meal Prep", "Fish, Chicken", "01/03/21");
}

function createHealthTasks() {
  let healthProject = JSON.parse(localStorage.projectList).filter(
    project => project.title === "Health"
  )[0];

  addTask(healthProject, "Lift Weights", "", "01/05/21");
  addTask(healthProject, "Yoga", "During Lunch break", "01/04/21");
  addTask(healthProject, "Rock Climb", "With Peter and Doug", "01/07/21");
}

export default initDefaultProjects; 