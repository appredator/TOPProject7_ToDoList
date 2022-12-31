class Project {

  constructor(name) {
    this.name = name;
	}
  
}

class ToDo {

  constructor(projectName, task, dueDate, status) {
    this.projectName = projectName;
    this.task = task;
    this.dueDate = dueDate;
    this.status = status; 
    this.list = 
    [{
    task: "",
    status: "",
    dueDate: "",
    }]; 
    
    }

}


// Add Project Button Logic

/// seems like I am not instantiating my constructors with DOM values
const addButton = document.querySelector("#addProject");
addButton.addEventListener('click', addProject);

function addProject(){

let counter = 0;
//Select bottom div for updates etc
var content = document.querySelector(".projects");

//Save projectNameField contents when enter is pressed on the ProjectName Field
const projectNameField = document.createElement("input");
projectNameField.classList.add('projectNameCell');
content.appendChild(projectNameField);
projectNameField.addEventListener('keydown', function onEvent(e) {
    if (e.key === 'Enter' || e.key === 'Tab') {
//Get and save project name
/* var project = projectNameField.value; */
//Instantiate Project constructor with DOM value
let project = new Project(projectNameField.value);
console.log(e.key)

projectNameField.remove();
//Use constructor to display project name in text
const projectNameDisplay = document.createElement("h3");
projectNameDisplay.classList.add('projectNameCell');
projectNameDisplay.innerHTML = project.name;
content.appendChild(projectNameDisplay);

}
});


//Save titleField contents when enter is pressed on the ProjectName Field
const taskField = document.createElement("input");
taskField.classList.add('taskCell');
content.appendChild(taskField);
taskField.addEventListener('keydown', function onEvent(e) {
    if (e.key === 'Enter' || e.key === 'Tab')  {
//Get and save title

//Instantiate toDo constructor with DOM value
let holder = new ToDo(taskField.value);
holder.projectName = document.querySelector(".projectNameCell").innerHTML;
holder.task = taskField.value;
console.log(holder.task)
//Use constructor to display project name in text
const taskDisplay = document.createElement("h3");
taskDisplay.classList.add('titleCell');
taskDisplay.innerHTML = holder.task;
taskField.remove();
content.appendChild(taskDisplay);

}
});

const dueDateField = document.createElement("input");
dueDateField.classList.add('dueDateCell');
content.appendChild(dueDateField);
dueDateField.addEventListener('keydown', function onEvent(e) {
    if (e.key === 'Enter' || e.key === 'Tab')  {
//Instantiate toDo constructor with DOM value
holder.dueDate = dueDateField.value;
/* console.log(task.list.dueDate) */

dueDateField.remove();
//Use constructor to display project name in text
const dueDateDisplay = document.createElement("h3");
dueDateDisplay.classList.add('dueDateCell');
dueDateDisplay.innerHTML = holder.dueDate;
content.appendChild(dueDateDisplay);

}
});

const statusField = document.createElement("input");
statusField.classList.add('statusCell');
content.appendChild(statusField);
statusField.addEventListener('keydown', function onEvent(e) {
    if (e.key === 'Enter' || e.key === 'Tab')  {

//Instantiate toDo constructor with DOM value
task.status = statusField.value;
console.log(task.dueDate)

statusField.remove();
//Use constructor to display project name in text
const statusDisplay = document.createElement("h3");
statusDisplay.classList.add('statusCell');
statusDisplay.innerHTML = task.status;
content.appendChild(statusDisplay);

}
});



counter++;

/* renderDetails(); */
}









//IIFE Display Controller Module to render project properties to DOM
/* const displayController = ( function() {
const projectTitle = document.querySelector(".projectTitle");
if (typeof project1 === 'object'){
  projectTitle.innerHTML = project1.toDoList.title;
}
else  {
  console.log("Type of check was false from display controller")
  console.log(typeof project1)

}   
return { projectTitle } 
})(); */


