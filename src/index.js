import projects from './projects';

import tasks from './tasks';


// import dom from './dom';

class Projecter {

  constructor(name) {
    this.name = name;
	}
 
}

class ToDos{

  constructor(projectName, list =[]) {
    this.projectName = projectName;
    this.list = list;
 
    
    }

}


// Add Project Button Logic

/// seems like I am not instantiating my constructors with DOM values
const addButton = document.querySelector("#addProject");
addButton.addEventListener('click', addProject);

function addProject(){

let counter = 0;
//Select bottom div for updates etc
const content = document.querySelector(".projects");

//Save projectNameField contents when enter or tab is pressed on the ProjectName Field
const projectNameField = document.createElement("input");
projectNameField.classList.add('projectNameCell');
content.appendChild(projectNameField);
projectNameField.addEventListener('keydown', function onEvent(e) {
    if (e.key === 'Enter' || e.key === 'Tab') {
//Get and save project name from input field
console.log("Value for Project Name is " + projectNameField.value)
const projectNameDisplay = document.createElement("h3");
projectNameDisplay.classList.add('projectNameCell');
projectNameDisplay.innerHTML = projectNameField.value;
projectNameField.remove();
content.appendChild(projectNameDisplay);

}
});


//Save titleField contents when enter is pressed on the ProjectName Field
const taskField = document.createElement("input");
taskField.classList.add('taskCell');
content.appendChild(taskField);
taskField.addEventListener('keydown', function onEvent(e) {
    if (e.key === 'Enter' || e.key === 'Tab')  {

//Get and save task name from input field
console.log("Value for Task Name is " + taskField.value)
const taskDisplay = document.createElement("h3");
taskDisplay.classList.add('taskCell');
taskDisplay.innerHTML = taskField.value;
taskField.remove();
content.appendChild(taskDisplay);

}
});

const dueDateField = document.createElement("input");
dueDateField.classList.add('dueDateCell');
content.appendChild(dueDateField);
dueDateField.addEventListener('keydown', function onEvent(e) {
    if (e.key === 'Enter' || e.key === 'Tab')  {
    
//Get and save task name from input field
console.log("Value for Due Date is " + dueDateField.value)
const dueDateDisplay = document.createElement("h3");
dueDateDisplay.classList.add('dueDateCell');
dueDateDisplay.innerHTML = dueDateField.value;
dueDateField.remove();
content.appendChild(dueDateDisplay);

}
});

const statusField = document.createElement("input");
statusField.classList.add('statusCell');
content.appendChild(statusField);
statusField.addEventListener('keydown', function onEvent(e) {
    if (e.key === 'Enter' || e.key === 'Tab')  {

//Get and save task name from input field
console.log("Value for status is " + statusField.value)
const statusDisplay = document.createElement("h3");
statusDisplay.classList.add('statusCell');
statusDisplay.innerHTML = statusField.value;
statusField.remove();
content.appendChild(statusDisplay);

projects.addProject(document.querySelector(".projectNameCell").innerHTML)
// let project = new Project(document.querySelector(".projectNameCell").innerHTML);

console.log(project.name)

tasks.addTask(document.querySelector(".taskCell").innerHTML);


let holder = new ToDo(document.querySelector(".taskCell").innerHTML, 
[{
task: document.querySelector(".taskCell").innerHTML,
dueDate: document.querySelector(".dueDateCell").innerHTML,
status: document.querySelector(".statusCell").innerHTML,
}]);

console.log(holder.list[0])

counter++;
}


});


/* renderDetails(); */
}





