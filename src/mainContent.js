import {
  compareAsc, format, endOfMonth, endOfWeek, endOfDay, parseISO,
} from 'date-fns';
import Task from './task.js';
import Project from './project.js';

const mainTag = function () {
  const content = document.querySelector('#content');
  let projectNum = 0;
  let projects;

  const createEl = (tag, className) => {
    const el = document.createElement(tag);
    el.classList.add(className);

    return el;
  };

  const formCon = (divClassName, h2textContent) => {
    const div = document.createElement('div');
    div.classList.add(divClassName);
    div.classList.add('hidden');

    const text = document.createElement('h2');
    text.textContent = h2textContent;

    div.append(text);
    return div;
  };

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

    console.log(`this is the projInd: ${projInd}`)
    projectsArray.splice(projInd, 1);

    localStorage.setItem("projects", JSON.stringify(projectsArray))
  }
  
  const removeTaskFromStorage = (projInd, taskInd) => {
    let projectsArray = JSON.parse(localStorage.getItem("projects"));
    
    console.log(taskInd)
    projectsArray[projInd].tasks.splice(taskInd, 1);
    
    console.log(projectsArray)
    localStorage.setItem("projects", JSON.stringify(projectsArray));
    console.log(projectsArray)
  }


  const formElements = () => {
    const todaysDate = format(new Date(), 'yyyy-MM-dd');
    const formEl = createEl('form', 'task-form');
    formEl.setAttribute('id', 'form-id');

    const formFieldset = document.createElement('fieldset');

    const formLegend = createEl('legend', 'form-leg');
    formLegend.innerHTML = 'Add A Task';

    const inputTitle = document.createElement('input');
    const labelTitle = document.createElement('label');
    labelTitle.innerHTML = 'Title:';
    inputTitle.name = 'title';
    inputTitle.setAttribute('id', 'input-title-id');
    inputTitle.setAttribute("required", "")
    const inputDes = document.createElement('input');
    const labelDes = document.createElement('label');
    labelDes.innerHTML = 'Description:';
    inputDes.setAttribute('id', 'input-description-id');
    inputDes.name = 'des';
    const inputDate = document.createElement('input');
    const labelDate = document.createElement('label');
    labelDate.innerHTML = 'Date:';
    inputDate.setAttribute('type', 'date');
    inputDate.setAttribute('id', 'input-date-id');
    inputDate.setAttribute('min', todaysDate);
    inputDate.setAttribute("required", "")
    inputDate.name = 'date';
    const selectPrio = document.createElement('select');
    const labelPrio = document.createElement('label');
    labelPrio.innerHTML = 'Priority:';
    selectPrio.setAttribute('id', 'select-priority-id');
    selectPrio.name = 'priority';
    const optionOne = document.createElement('option');
    optionOne.setAttribute('value', 'Low');
    optionOne.innerHTML = 'Low';
    const optionTwo = document.createElement('option');
    optionTwo.setAttribute('value', 'Medium');
    optionTwo.innerHTML = 'Medium';
    const optionThree = document.createElement('option');
    optionThree.setAttribute('value', 'High');
    optionThree.innerHTML = 'High';
    selectPrio.append(optionOne);
    selectPrio.append(optionTwo);
    selectPrio.append(optionThree);
    const formBtn = document.createElement('button');
    formBtn.classList.add('submit-form');
    formBtn.setAttribute('id', 'submit-btn-id');
    formBtn.innerHTML = 'Submit Form';

    formEl.appendChild(formFieldset);
    formFieldset.appendChild(formLegend);
    formFieldset.appendChild(labelTitle);
    formFieldset.appendChild(inputTitle);
    formFieldset.appendChild(labelDes);
    formFieldset.appendChild(inputDes);
    formFieldset.appendChild(labelDate);
    formFieldset.appendChild(inputDate);
    formFieldset.appendChild(labelPrio);
    formFieldset.appendChild(selectPrio);
    formFieldset.append(formBtn);

    return formEl;
  };

  const createProjectForm = () => {
    const form = createEl('form', 'project-form');
    form.setAttribute('id', 'project-form-id');

    const inputTitle = document.createElement('input');
    const labelTitle = document.createElement('label');
    labelTitle.innerHTML = 'Project Name:';
    inputTitle.name = 'project-name';
    inputTitle.setAttribute('id', 'input-project-id');
    inputTitle.setAttribute("required", "")

    const formBtn = createEl('button', 'submit-project-form');
    formBtn.setAttribute('id', 'submit-project-btn-id');
    formBtn.innerHTML = 'Create Project';

    form.append(labelTitle);
    form.append(inputTitle);
    form.append(formBtn);

    return form;
  };

  const renderMain = () => {
    const mainTag = createEl('main', 'main-content');
    const taskDiv = createEl('div', 'task-container');
    const projectFormDiv = createEl('div', 'project-form-div');
    projectFormDiv.classList.add('hidden');
    const formD = formCon('form-div', 'Create a task');
    const formE = formElements();
    const formProject = createProjectForm();
    content.append(mainTag);
    mainTag.append(taskDiv);
    mainTag.append(formD);
    mainTag.append(projectFormDiv);
    projectFormDiv.append(formProject);
    formD.append(formE);
  };

  renderMain();

  const myForm = document.getElementById('form-id');
  const myProjectForm = document.getElementById('project-form-id');

  let taskDivId = 0;
  let taskId = 0;
  let projectId = 0;

  const renderTaskContent = (task) => {
    const taskCont = document.querySelector('.task-container');

    taskCont.innerHTML += `
      <div class="task-div" data-id="${projectNum}" data-task-id="${taskId}">
        <div class="delete-div">
          <p class="del-p">X</p>
        </div>
        <div class="card-div">
          <p class="task-p">${task.title}</p>
          <p class="task-p">${task.description}</p>
          <p class="task-p task-card-date">${task.dueDate}</p>
          <p class="task-p">${task.priority}</p>
          <div class="task-check-div">
            <label>Completed</label>
            <input type="checkbox" class="task-checkbox">
          </div>
        </div>
      </div>
    `;

    taskDivId++;
    taskId++;
  };

  // Toggle completion
  document.addEventListener('click', (e) => {
    if (e.target.className === 'task-checkbox'); {
      // const currentId = e.target.parentNode.parentNode.parentNode.dataset.id;
      // if (Task[currentId].completed == false) {
      //   Task[currentId].completed = true;
      // } else if (Task[currentId].completed == true) {
      //   Task[currentId].completed = false;
      // }
    }
  });


  const formSubmitAction = (e) => {
    e.preventDefault();

    const submitButton = document.getElementById('submit-btn-id');

    const titleInput = document.getElementById('input-title-id').value;
    const desInput = document.getElementById('input-description-id').value;
    const dateInput = document.getElementById('input-date-id').value;
    const prioInput = document.getElementById('select-priority-id').value;

    Task[taskId] = new Task(titleInput, desInput, dateInput, prioInput);

    Project[projectNum].addTask(Task[taskId]);

    addToStorage('task', Task[taskId]);

    renderTaskContent(Task[taskId]);
    console.log(Task[taskId]);
  };

  myForm.addEventListener('submit', formSubmitAction);

  const renderProject = (name) => {
    const projectListDiv = document.querySelector('.project-list-con');
    const newDiv = createEl('div', 'project-list-div');
    const text = createEl('p', 'project-name-p');
    const delText = createEl('p', 'project-del');

    text.textContent = name;
    delText.textContent = 'X';
    newDiv.append(text);
    newDiv.append(delText);
    newDiv.setAttribute('data-value', projectId);
    projectListDiv.append(newDiv);
  };

  const createProject = (e) => {
    let projectName;
    const storageArray = JSON.parse(localStorage.getItem('projects'));
    if (projectId > 0) {
      e.preventDefault();
    }

    if (projectId == 0) {
      projectName = 'Default';
    } else {
      projectName = document.getElementById('input-project-id').value;
    }

    // if (document.getElementById("input-project-id").value == 'Default') {
    if (projectName == 'Default' && projectId > 0) {
      alert("Default is not a valid name, please choose another")
      return
    }

    Project[projectId] = new Project(projectName, projectId);
    renderProject(projectName);

    if (projectId == 0 && !storageArray) {
      addToStorage('project', Project[projectId]);
    }

    if (projectId !== 0) {
      addToStorage('project', Project[projectId]);
    }

    projectId++;
  };

  myProjectForm.addEventListener('submit', createProject);

  // Render local storage projects
  const renderProjectStorage = () => {
    const storageArray = JSON.parse(localStorage.getItem('projects'));
    const projectListDiv = document.querySelector('.project-list-con');

    if (storageArray) {
      storageArray.forEach((el) => {
        projectId = el.id;
        Project[projectId] = new Project(el.name, projectId);
        console.log(Project[projectId].tasks);
        renderProject(el.name);
        projectId++;
      });
    } else {
      createProject();
    }
  };

  renderProjectStorage();

  // Select project and show related tasks
  document.body.addEventListener('click', (e) => {
    if (e.target.className == 'project-name-p') {
      projectNum = e.target.parentNode.dataset.value;
      const taskArray = JSON.parse(localStorage.getItem('projects'))[projectNum].tasks;
      
      // if (Project[projectNum].selected) {
        // Don't render the tasks again if the current project is already selected
        // return;
      // }
          

      // POSSIBLY THE REASON FOR ERROR
      if (taskArray) {
        taskArray.forEach((el) => {
          renderTaskContent(el);
          Project[projectNum].tasks.push(el);
        });
      }
      hideDivs();
      showDivs();

      // Project[projectNum].selected = true;

      // let allProjects = document.querySelectorAll(".project-list-div");
      // allProjects.forEach(el => {
        // if (el.dataset.value !== projectNum) {
          // Project[el.dataset.value].selected = false
        // }
      // })
    }
  });

  const hideDivs = () => {
    const taskDivs = document.querySelectorAll('.task-div');
    taskDivs.forEach((el) => {
      if (el.dataset.id !== projectNum) {
        el.classList.add('hidden');
      }
    });
  };

  const showDivs = () => {
    const taskDivs = document.querySelectorAll('.task-div');
    taskDivs.forEach((el) => {
      if (el.dataset.id == projectNum) {
        el.classList.remove('hidden');
      }
    });
  };

  // Hide sidebar on click
  const menuSvgTag = document.querySelector('.menu-svg');
  menuSvgTag.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar-div');
    const con = document.querySelector('#content');
    sidebar.classList.toggle('hidden');
    if (sidebar.classList.contains('hidden')) {
      con.style.gridTemplateAreas = '"head head head" "main main main" "main main main"';
    } else {
      con.style.gridTemplateAreas = '"head head head" "side main main" "side main main"';
    }
  });

  // Show Task form on click
  const taskSvg = document.querySelector('.plus-svg');
  taskSvg.addEventListener('click', () => {
    const formDiv = document.querySelector('.form-div');
    formDiv.classList.toggle('hidden');
  });

  // Show Project form on click
  const projectFormSvg = document.querySelector('.project-svg');
  projectFormSvg.addEventListener('click', () => {
    const projectForm = document.querySelector('.project-form-div');
    projectForm.classList.toggle('hidden');
  });

  // Delete Tasks
  document.addEventListener('click', (e) => {
    const deleteP = document.querySelector('.del-p');
    if (e.target.className == 'del-p') {
      let projDataId = e.target.parentNode.parentNode.dataset.id;
      let currentTaskId = e.target.parentNode.parentNode.dataset.taskId;
      let selectedTask = document.querySelector(`[data-task-id="${currentTaskId}"]`);

     // find index that corresponds to the selected task element's id
      const allTasks = document.querySelectorAll("[data-value]");
      const index = [...allTasks].findIndex(el => el.dataset.value === currentTaskId)

      removeTaskFromStorage(projDataId, index);
      Project[projDataId].removeTask(currentTaskId);
      selectedTask.remove();
      taskId--;
      taskDataId--;
    }
  });

  // Delete Projects
  document.addEventListener('click', (e) => {
      if (e.target.className == 'project-del') {
        let projDataVal = e.target.parentNode.dataset.value;
        let projectName = e.target.previousSibling.innerHTML;
        if (projectName !== 'Default') {
          let selectedProject = document.querySelector(`[data-value="${projDataVal}"]`);

          // find index that corresponds to the selected project element's value
          const allProjects = document.querySelectorAll("[data-value]");
          const index = [...allProjects].findIndex(el => el.dataset.value === projDataVal)

          removeProjectFromStorage(index)
          selectedProject.remove();
          console.log(`test ${projDataVal}, || ${projectId}`)
          projectId -= 1;
        }
      }
  });

  const dateToday = document.querySelector('.date-today');
  const dateWeek = document.querySelector('.date-week');
  const dateMonth = document.querySelector('.date-month');

  dateToday.addEventListener('click', (e) => {
    const endDayDate = endOfDay(new Date());

    const taskDiv = document.querySelectorAll('.task-div');
    taskDiv.forEach((el) => {
      const taskDate = new Date(el.children[1].children[2].innerHTML.replace(/-/g, '/'));
      if (taskDate > endDayDate) {
        el.classList.add('hidden');
      }
    });
  });

  dateWeek.addEventListener('click', (e) => {
    const endOfW = endOfWeek(new Date());

    const taskDiv = document.querySelectorAll(".task-div");
    taskDiv.forEach((el) => {
      const taskDate = new Date(el.children[1].children[2].innerHTML.replace(/-/g, '/'));
      if (taskDate > endOfW) {
        el.classList.add("hidden")
      }
    })
  });

  dateMonth.addEventListener('click', (e) => {
    const endOfM = endOfMonth(new Date());

    const taskDiv = document.querySelectorAll(".task-div");
    taskDiv.forEach((el) => {
      const taskDate = new Date(el.children[1].children[2].innerHTML.replace(/-/g, '/'));
      if (taskDate > endOfM) {
        el.classList.add("hidden")
      }
    })
    
  });

  return mainTag;
};

export default mainTag;












// document.body.addEventListener('click', (e) => {
//   if (e.target.className == 'project-name-p') {
//     projectNum = e.target.parentNode.dataset.value;
//     const taskArray = JSON.parse(localStorage.getItem('projects'))[projectNum].tasks;
    
//     // POSSIBLY THE REASON FOR ERROR
//     if (taskArray) {
//       taskArray.forEach((el) => {
//         renderTaskContent(el);
//         Project[projectNum].tasks.push(el);
//         console.log("task array test")
//       });
//     } else {
//       console.log('test')
//     }
//     hideDivs();
//     showDivs();
//   }
// });

//     Check if the current project is already selected before rendering the tasks:

// document.body.addEventListener('click', (e) => {
//   if (e.target.className == 'project-name-p') {
//     projectNum = e.target.parentNode.dataset.value;
//     const taskArray = JSON.parse(localStorage.getItem('projects'))[projectNum].tasks;
  
//     // Check if the current project is already selected
//     if (Project[projectNum].selected) {
//       // Don't render the tasks again if the current project is already selected
//       return;
//     }
  
//     // POSSIBLY THE REASON FOR ERROR
//     if (taskArray) {
//       taskArray.forEach((el) => {
//         renderTaskContent(el);
//         Project[projectNum].tasks.push(el);
//         console.log("task array test")
//       });
//     } else {
//       console.log('test')
//     }
//     hideDivs();
//     showDivs();
  
//     // Mark the current project as selected
//     Project[projectNum].selected = true;
//   }
// });
