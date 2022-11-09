import task from './task.js';
import project from './project.js'

const mainTag = function() {
    const content = document.querySelector("#content");

    const main = () => {
        const tagMain = document.createElement("main");
        tagMain.classList.add("main-content");

        return tagMain;
    }

    const createDiv = (className) => {
        const div = document.createElement("div");
        div.classList.add(className);

        return div
    }
    
    // const formCon = () => {
    //     const div = document.createElement("div");
    //     div.classList.add("form-div");
        
    //     const text = document.createElement("h2");
    //     text.textContent = 'Create a task';

    //     div.append(text);
    //     return div;
    // }

    const formCon = (divClassName, h2textContent) => {
        const div = document.createElement("div");
        div.classList.add(divClassName);

        const text = document.createElement("h2");
        text.textContent = h2textContent;

        div.append(text);
        return div;
    }


    const formElements = () => {
        const formEl = document.createElement("form");
        formEl.classList.add("task-form");
        formEl.setAttribute("id", "form-id")

        const formFieldset = document.createElement("fieldset");


        const formLegend = document.createElement("legend");
        formLegend.classList.add("form-leg");
        formLegend.innerHTML = 'Add A Task'

        const inputTitle = document.createElement("input");
        const labelTitle = document.createElement("label");
        labelTitle.innerHTML = 'Title:';
        inputTitle.name = 'title';
        inputTitle.setAttribute("id", "input-title-id");
        const inputDes = document.createElement("input");
        const labelDes = document.createElement("label");
        labelDes.innerHTML = 'Description:';
        inputDes.setAttribute("id", "input-description-id")
        inputDes.name = 'des';
        const inputDate = document.createElement("input");
        const labelDate = document.createElement("label");
        labelDate.innerHTML = 'Date:';
        inputDate.setAttribute("id", "input-date-id");
        inputDate.name = 'date';
        const inputPrio = document.createElement("input");
        const labelPrio = document.createElement("label");
        labelPrio.innerHTML = 'Priority:';
        inputPrio.setAttribute("id", "input-priority-id");
        inputPrio.name = 'priority';
        const formBtn = document.createElement("button");
        formBtn.classList.add("submit-form");
        formBtn.setAttribute("id", "submit-btn-id");
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
        formFieldset.appendChild(inputPrio);
        formFieldset.append(formBtn);

        return formEl;
    }

    const createProjectForm = () => {
        const form = document.createElement("form");
        form.classList.add("project-form");
        form.setAttribute("id", "project-form-id");

        const inputTitle = document.createElement("input");
        const labelTitle = document.createElement("label");
        labelTitle.innerHTML = 'Project Name:';
        inputTitle.name = 'project-name';
        inputTitle.setAttribute("id", "input-project-id");

        const formBtn = document.createElement("button");
        formBtn.classList.add("submit-project-form");
        formBtn.setAttribute("id", "submit-project-btn-id");
        formBtn.innerHTML = 'Create Project';


        form.append(labelTitle);
        form.append(inputTitle);
        form.append(formBtn);

        return form
    }

    const renderMain = () => {
        const mainTag = main();
        const taskDiv = createDiv('task-container');
        const projectFormDiv = createDiv("project-form-div");
        const formD = formCon("form-div", "Create a task");
        const formE = formElements();
        const formProject = createProjectForm();
        content.append(mainTag);
        mainTag.append(taskDiv);
        mainTag.append(formD);
        mainTag.append(projectFormDiv);
        projectFormDiv.append(formProject);
        formD.append(formE);

    }

    renderMain();


    
    let myForm = document.getElementById("form-id");
    let myProjectForm = document.getElementById("project-form-id");
        
    const formSubmitAction = (e) => {
        e.preventDefault();
        
        const submitButton = document.getElementById("submit-btn-id");
        const taskCont = document.querySelector(".task-container");
        const newTaskDiv = createDiv("task-div");
        let id = 0;
        
        let titleInput = document.getElementById('input-title-id').value;
        let desInput = document.getElementById('input-description-id').value;
        let dateInput = document.getElementById('input-date-id').value;
        let prioInput = document.getElementById('input-priority-id').value;
        task[id] = task(titleInput, desInput, dateInput, prioInput)
        let titleText = document.createElement("p");
        let desText = document.createElement("p");
        let dateText = document.createElement("p");
        let prioText = document.createElement("p");
        titleText.classList.add("task-p");
        desText.classList.add("task-p");
        dateText.classList.add("task-p");
        prioText.classList.add("task-p");
        titleText.textContent = task[id].getTitle();
        desText.textContent = task[id].getDescription();
        dateText.textContent = task[id].getDueDate();
        prioText.textContent = task[id].getPriority();

        newTaskDiv.appendChild(titleText);
        newTaskDiv.appendChild(desText);
        newTaskDiv.appendChild(dateText);
        newTaskDiv.appendChild(prioText);
        console.log(task[id].getTitle(), task[id].getDescription());
        taskCont.appendChild(newTaskDiv);
        id++; 
    }
    myForm.addEventListener("submit", formSubmitAction);

    

    return mainTag;
}

export default mainTag

