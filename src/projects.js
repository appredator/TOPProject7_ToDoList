// import dom from './dom';

const projects = (() => {

    class Project {
        constructor(name) {
          this.name = name;
        }
      }

    let projectsList = [];

    function addProject(title){
        const project = new Project(title);
        projectsList.push(project);
    }

    return {
        addProject
        // editProject,
        // deleteProject,
        // toggleProjectCompletion
      };


})();

export default projects;