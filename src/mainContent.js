import Task from './task.js';
import Project from './project.js';
import { compareAsc, format } from 'date-fns'

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
    div.classList.add("hidden");

    const text = document.createElement('h2');
    text.textContent = h2textContent;

    div.append(text);
    return div;
  };

  // const taskList = JSON.parse(localStorage.getItem("tasks")) || []
  // taskList.forEach(el => {
  //   for (const task in el) {
  //     console.log(el[task])
  //   }
  // })

  const addToStorage = (task) => {
    if (localStorage.getItem('projects') === null) {
      projects = []
    } else {
      projects = JSON.parse(localStorage.getItem("projects"));
    }
    // projects.push(Project[projectNum].getTaskId(taskId));
    projects.push(task);
    // console.log(Project[projectNum].getTaskId(taskId))
    localStorage.setItem("projects", JSON.stringify(projects));
    // console.log(JSON.parse(localStorage.getItem("projects")));
  }

  const addTaskToStorage = (task) => {
    if (localStorage.getItem('projects') === null) {
      projects = []
    } else {
      projects = JSON.parse(localStorage.getItem("projects"));
    }
    // projects.push(Project[projectNum].getTaskId(taskId));
    projects[projectNum].tasks.push(task);
    // console.log(Project[projectNum].getTaskId(taskId))
    localStorage.setItem("projects", JSON.stringify(projects));
    // console.log(JSON.parse(localStorage.getItem("projects")));
  }



  const addProjectToStorage = (project) => {
    if (localStorage.getItem('projects') === null) {
      projects = []
    } else {
      projects = JSON.parse(localStorage.getItem("projects"));
    }
    projects.push(project);
    localStorage.setItem("projects", JSON.stringify(projects));
  }


  // const updateStorage = (item) => {
  //   let existing = localStorage.getItem(item);
  //   let data = existing ? existing + JSON.parse(item) : JSON.parse(item)
  //   localStorage.setItem(item, data);
  // }

  const formElements = () => {
    const formEl = createEl("form", "task-form")
    formEl.setAttribute('id', 'form-id');

    const formFieldset = document.createElement('fieldset');

    const formLegend = createEl("legend", "form-leg");
    formLegend.innerHTML = 'Add A Task';

    const inputTitle = document.createElement('input');
    const labelTitle = document.createElement('label');
    labelTitle.innerHTML = 'Title:';
    inputTitle.name = 'title';
    inputTitle.setAttribute('id', 'input-title-id');
    const inputDes = document.createElement('input');
    const labelDes = document.createElement('label');
    labelDes.innerHTML = 'Description:';
    inputDes.setAttribute('id', 'input-description-id');
    inputDes.name = 'des';
    const inputDate = document.createElement('input');
    const labelDate = document.createElement('label');
    labelDate.innerHTML = 'Date:';
    inputDate.setAttribute("type", "date")
    inputDate.setAttribute('id', 'input-date-id');
    inputDate.name = 'date';
    const selectPrio = document.createElement('select');
    const labelPrio = document.createElement('label');
    labelPrio.innerHTML = 'Priority:';
    selectPrio.setAttribute('id', 'select-priority-id');
    selectPrio.name = 'priority';
    const optionOne = document.createElement("option");
    optionOne.setAttribute("value", "Low")
    optionOne.innerHTML = "Low"
    const optionTwo = document.createElement("option");
    optionTwo.setAttribute("value", "Medium")
    optionTwo.innerHTML = "Medium"
    const optionThree = document.createElement("option");
    optionThree.setAttribute("value", "High")
    optionThree.innerHTML = "High"
    selectPrio.append(optionOne)
    selectPrio.append(optionTwo)
    selectPrio.append(optionThree)
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
    const form = createEl("form", "project-form")
    form.setAttribute('id', 'project-form-id');

    const inputTitle = document.createElement('input');
    const labelTitle = document.createElement('label');
    labelTitle.innerHTML = 'Project Name:';
    inputTitle.name = 'project-name';
    inputTitle.setAttribute('id', 'input-project-id');

    const formBtn = createEl("button", "submit-project-form");
    formBtn.setAttribute('id', 'submit-project-btn-id');
    formBtn.innerHTML = 'Create Project';

    form.append(labelTitle);
    form.append(inputTitle);
    form.append(formBtn);

    return form;
  };

  const renderMain = () => {
    const mainTag = createEl("main", "main-content")
    const taskDiv = createEl('div', 'task-container');
    const projectFormDiv = createEl('div', 'project-form-div');
    projectFormDiv.classList.add("hidden")
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
  const renderTaskContent = () => {
    const taskCont = document.querySelector('.task-container');

    taskCont.innerHTML += `
      <div class="task-div" data-id="${projectNum}" data-task-id="${taskId}">
        <div class="delete-div">
          <p class="del-p">X</p>
        </div>
        <div class="card-div">
          <p class="task-p">${Task[taskId].title}</p>
          <p class="task-p">${Task[taskId].description}</p>
          <p class="task-p">${Task[taskId].dueDate}</p>
          <p class="task-p">${Task[taskId].priority}</p>
          <div class="task-check-div">
            <label>Completed</label>
            <input type="checkbox" class="task-checkbox">
          </div>
        </div>
      </div>
    `

    taskDivId++;
  }

  // Toggle completion
  document.addEventListener("click", (e) => {
    if (e.target.className === 'task-checkbox'); {
    let currentId = e.target.parentNode.parentNode.parentNode.dataset.id;
     if (Task[currentId].completed == false) {
       Task[currentId].completed = true;
      } else if (Task[currentId].completed == true) {
        Task[currentId].completed = false
      }
    }
  })

  let taskId = 0;
  let projectId = 0;
  const formSubmitAction = (e) => {
    e.preventDefault();

    const submitButton = document.getElementById('submit-btn-id');

    const titleInput = document.getElementById('input-title-id').value;
    const desInput = document.getElementById('input-description-id').value;
    const dateInput = document.getElementById('input-date-id').value;
    const prioInput = document.getElementById('select-priority-id').value;

    Task[taskId] = new Task(titleInput, desInput, dateInput, prioInput, taskId);

    // console.log(Project[projectNum].getTaskId(taskId))
    // console.log(projectNum)
    
    Project[projectNum].addTask(Task[taskId]);
    // console.log(Project[projectNum].getTaskId(taskId))


    // addToStorage(Task[taskId]);
    addTaskToStorage(Task[taskId])
    console.log(projects[0].tasks.push(Task[taskId]))
    projects[0].tasks.push(Task[taskId])
    console.log(projects[0])
    console.log(JSON.parse(localStorage.getItem("projects")))
    console.log("break")
    console.log(JSON.parse(localStorage.getItem("projects[0].tasks")))
    // addTaskToStorage(Project[projectNum], Task[taskId])
    // console.log(Project[projectNum].tasks)
    // console.log(Task[taskId])

    renderTaskContent();
    taskId++;
  };

  myForm.addEventListener('submit', formSubmitAction);

  const createProject = (e) => {
    let projectName;
    if (projectId > 0) {
      e.preventDefault();
    }

    const projectListDiv = document.querySelector('.project-list-con');
    const newDiv = createEl('div', 'project-list-div');
    const text = createEl('p', 'project-name-p');
    const delText = createEl("p", "project-del");

    if (projectId == 0) {
      projectName = 'Default';

    } else {
      projectName = document.getElementById('input-project-id').value;
    }
    Project[projectId] = new Project(projectName);
    text.textContent = projectName;
    delText.textContent = 'X';
    newDiv.append(text);
    newDiv.append(delText);
    newDiv.setAttribute('data-value', projectId);
    projectListDiv.append(newDiv);


    addToStorage(Project[projectId])

    projectId++;
  };

  createProject();

  myProjectForm.addEventListener('submit', createProject);

  // Select project and show related tasks
  document.body.addEventListener('click', (e) => {
    if (e.target.className == 'project-name-p') {
      projectNum = e.target.parentNode.dataset.value;
      // console.log(Project[projectNum]);
      hideDivs();
      showDivs();
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
    const con = document.querySelector("#content");
    sidebar.classList.toggle('hidden');
        if (sidebar.classList.contains("hidden")) {
          con.style.gridTemplateAreas = '"head head head" "main main main" "main main main"';
        } else {
          con.style.gridTemplateAreas = '"head head head" "side main main" "side main main"';
        }
  });

  // Show Task form on click
  const taskSvg = document.querySelector(".plus-svg");
  taskSvg.addEventListener("click", () => {
    const formDiv = document.querySelector(".form-div");
    formDiv.classList.toggle("hidden");
  })

  
  const projectFormSvg = document.querySelector(".project-svg");
  projectFormSvg.addEventListener("click", () => {
      const projectForm = document.querySelector(".project-form-div");
      projectForm.classList.toggle("hidden")
  })
  
  // Delete Tasks
  document.addEventListener("click", (e) => {
    const deleteP = document.querySelector(".del-p");
    if (deleteP && e.target == deleteP) {
      const projDataId = e.target.parentNode.parentNode.dataset.id;
      const taskDataId = e.target.parentNode.parentNode.dataset.taskId;
      Project[projDataId].removeTask(taskDataId);
      e.target.parentNode.parentNode.remove();
      taskId--;
      taskDataId--;
    }
  })

  // Delete Projects
  document.addEventListener("click", (e) => {
  const delX = document.querySelector(".project-del");
  if (delX && e.target == delX) {
    const projDataVal = e.target.parentNode.dataset.value;
    e.target.parentNode.remove();

    projectId -= 1;
  }
  })

  const dateToday = document.querySelector(".date-today")
  const dateWeek = document.querySelector(".date-week")
  const dateMonth = document.querySelector(".date-month")

  dateToday.addEventListener("click", () => {
    const date = new Date();
    console.log(date)
  })

  dateWeek.addEventListener("click", () => {
    
  })

  dateMonth.addEventListener("click", () => {
    
  })


  // console.log(JSON.parse(localStorage.getItem(taskDivId)))
  // console.log(localStorage.getItem(taskDivId))
  // let savedTask = JSON.parse(localStorage.getItem(taskDivId));
  // let taskC = document.querySelector(".task-container");
  // taskC.innerHTML += `${savedTask}`


  // localStorage.setItem(taskDivId, JSON.stringify(document.querySelector(".task-div").outerHTML));
  // console.log(JSON.parse(localStorage.getItem(taskDivId)));

  // let savedTask = localStorage.getItem('task');
  // let savedTaskDiv = JSON.parse(localStorage.getItem('tasksdiv'));
  // // let savedTaskDiv = localStorage.getItem('tasksdiv');
  // console.log(savedTaskDiv)
  // console.log(`this is: ${savedTask}`)
  // taskC.innerHTML = savedTaskDiv
  // let taskDiv = document.querySelector(".task-div");
  // if (taskDiv) {
  // let newDiv = createEl("div", "")
  // taskDiv.outerHTML = savedTaskDiv
  // }

  return mainTag;
};

export default mainTag;
