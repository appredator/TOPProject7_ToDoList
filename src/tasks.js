import projects from './projects';
// import dom from './dom';

const tasks = (() => {

    class Task {
        constructor(title, description, date, priority, projectIndex, taskIndex) {
          this.title = title;
          this.description = description;
          this.date = date;
          this.priority = priority;
          this.projectIndex = projectIndex;
          this.taskIndex = taskIndex;
        }
      }

    function addTask(title, description, date, priority, projectIndex, taskIndex) {
        const task = new Task(title, description, date, priority, projectIndex, taskIndex);
    
        projects.projectsList[projectIndex].tasks.push(task);
        dom.getTasks('project', projectIndex);
    }

    return {
        addTask
        // editTask,
        // deleteTask,
        // toggleTaskCompletion
      };

})();

export default tasks;