import Task from './task.js';
import Project from './project.js';

const mainTag = function () {
  const content = document.querySelector('#content');
  let projectNum = 0;

  const main = () => {
    const tagMain = document.createElement('main');
    tagMain.classList.add('main-content');

    return tagMain;
  };

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
    const mainTag = main();
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

  const renderTaskContent = () => {
    const taskCont = document.querySelector('.task-container');
    const newTaskDiv = createEl('div', 'task-div');
    const cardText = createEl('div', "card-div");
    const delDiv = createEl('div', "delete-div");

    const titleText = createEl('p', "task-p");
    const desText = createEl('p', "task-p");
    const dateText = createEl('p', "task-p");
    const prioText = createEl('p', "task-p");
    const delText = createEl('p', "del-p");

    delText.textContent = 'X'
    titleText.textContent = Task[taskId].title;
    desText.textContent = Task[taskId].description;
    dateText.textContent = Task[taskId].dueDate;
    prioText.textContent = Task[taskId].priority;

    newTaskDiv.setAttribute('data-id', projectNum);
    newTaskDiv.setAttribute('data-task-id', taskId);
    newTaskDiv.appendChild(delDiv);
    delDiv.appendChild(delText);
    newTaskDiv.appendChild(cardText)
    cardText.appendChild(titleText);
    cardText.appendChild(desText);
    cardText.appendChild(dateText);
    cardText.appendChild(prioText);
    taskCont.appendChild(newTaskDiv);


  }

  let taskId = 0;
  let projectId = 0;
  const formSubmitAction = (e) => {
    e.preventDefault();

    const submitButton = document.getElementById('submit-btn-id');

    const titleInput = document.getElementById('input-title-id').value;
    const desInput = document.getElementById('input-description-id').value;
    const dateInput = document.getElementById('input-date-id').value;
    const prioInput = document.getElementById('select-priority-id').value;
    Task[taskId] = new Task(titleInput, desInput, dateInput, prioInput);
    Project[projectNum].addTask(Task[taskId]);
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
    const newDiv = document.createElement('div');
    const text = document.createElement('p');
    newDiv.classList.add('project-list-div');
    text.classList.add('project-name-p');

    if (projectId == 0) {
      projectName = 'Default';
    } else {
      projectName = document.getElementById('input-project-id').value;
    }
    Project[projectId] = new Project(projectName);
    text.textContent = projectName;
    newDiv.append(text);
    text.setAttribute('data-value', projectId);
    projectListDiv.append(newDiv);

    projectId++;
  };

  createProject();

  myProjectForm.addEventListener('submit', createProject);

  document.body.addEventListener('click', (e) => {
    if (e.target.className == 'project-name-p') {
      projectNum = e.target.dataset.value;
      console.log(Project[projectNum]);
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
  
  document.addEventListener("click", (e) => {
    const deleteP = document.querySelector(".del-p");
    if (deleteP) {
      const projDataId = e.target.parentNode.parentNode.dataset.id;
      const taskDataId = e.target.parentNode.parentNode.dataset.taskId;
      Project[projDataId].removeTask(taskDataId);
      e.target.parentNode.parentNode.remove();
      taskId--;
      taskDataId--;
      console.log(Project[projDataId])
    }
  })


  return mainTag;
};

export default mainTag;
