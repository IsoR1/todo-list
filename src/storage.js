const addToStorage = (call, task) => {
    if (localStorage.getItem('projects') === null) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem('projects'));
    }
    if (call == 'project') {
      projects.push(task);
    } else if (call == 'task') {
      projects[projectNum].tasks.push(task);
    }
    localStorage.setItem('projects', JSON.stringify(projects));
  };

const removeProjectFromStorage = (projInd) => {
    let projectsArray = JSON.parse(localStorage.getItem("projects"));

    projectsArray.splice(projInd, 1);

    localStorage.setItem("projects", JSON.stringify(projectsArray))
}
  
const removeTaskFromStorage = (projInd, taskInd) => {
    let projectsArray = JSON.parse(localStorage.getItem("projects"));
    
    projectsArray[projInd].tasks.splice(taskInd, 1);
    
    localStorage.setItem("projects", JSON.stringify(projectsArray));
}
  
const updateCompletionStorage = (projInd, taskInd) => {
    let storageArray = JSON.parse(localStorage.getItem("projects"));

    if (storageArray[projInd].tasks[taskInd].completed == false) {
      storageArray[projInd].tasks[taskInd].completed = true
    } else {
      storageArray[projInd].tasks[taskInd].completed = false;
    }

    localStorage.setItem("projects", JSON.stringify(storageArray))
}

const checkIfCompleted = (projInd, taskInd) => {
    let storageArray = JSON.parse(localStorage.getItem("projects"));

    if (storageArray === undefined || 
      storageArray[projInd] === undefined ||
      storageArray[projInd].tasks[taskInd] === undefined) {
        return undefined
      } else if (storageArray[projInd].tasks[taskInd].completed) {
        return true
    }
}

export {addToStorage, removeProjectFromStorage, removeTaskFromStorage, updateCompletionStorage, checkIfCompleted}