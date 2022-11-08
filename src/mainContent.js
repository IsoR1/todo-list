const mainTag = function() {
    const content = document.querySelector("#content");

    const main = () => {
        const tagMain = document.createElement("main");
        tagMain.classList.add("main-content");

        return tagMain;
    }

    const taskContent = () => {
        const div = document.createElement('div');
        div.classList.add("task-container");

        return div;
    }

    const createTaskDiv = () =>{
        const div = document.createElement("div");
        div.classList.add("task-div");

        return div;
    }

    
    const formCon = () => {
        const div = document.createElement("div");
        div.classList.add("form-div");
        
        const text = document.createElement("h2");
        text.textContent = 'Create a task';

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


    
    const renderMain = () => {
        const mainTag = main();
        const taskDiv = taskContent();
        const formD = formCon();
        const formE = formElements();
        content.append(mainTag);
        mainTag.appendChild(taskDiv);
        mainTag.append(formD);
        formD.append(formE);
    }

    renderMain();
    
    // const mainTag = document.querySelector(".main-content");



    
    
    // let myForm = document.getElementById("form-id");
    // myForm.addEventListener("submit", formSubmitAction)
    // myForm.addEventListener("submit", (e) => { 

    // // const formSubmitAction = (e) => {
    //     e.preventDefault();

    //     const submitButton = document.getElementById("submit-btn-id");
    //     const taskDiv = document.querySelector(".task-container");
    //     let id = 0;

    //     let titleInput = document.getElementById('input-title-id').value;
    //     let desInput = document.getElementById('input-description-id').value;
    //     let dateInput = document.getElementById('input-date-id').value;
    //     let prioInput = document.getElementById('input-priority-id').value;
    //     task[id] = task(titleInput, desInput, dateInput, prioInput)
    //     taskDiv.append(task[id].getTitle(), task[id].getDescription(), task[id].getDueDate(), task[id].getPriority())
    //     console.log(task[id].getTitle(), task[id].getDescription());
    //     id++; 
    // }
    // )

    // myForm.addEventListener("submit", (e) => {
    //     e.preventDefault();
      
    //     let id = 0;
    //     let titleInput = document.getElementById('input-title-id').value;
    //     let desInput = document.getElementById('input-description-id').value;
    //     let dateInput = document.getElementById('input-date-id').value;
    //     let prioInput = document.getElementById('input-priority-id').value;
    //     task[id] = task(titleInput, desInput, dateInput, prioInput)
    //     taskDiv.append(task[id].getTitle(), task[id].getDescription(), task[id].getDueDate(), task[id].getPriority())
    //     console.log(task[id].getTitle(), task[id].getDescription());
    //     id++; 
    //   })
    
    return mainTag;
}

export default mainTag




// const submitButton = document.getElementById('submit-btn-id');
// let myForm = document.getElementById("form-id");
// const taskDiv = document.querySelector(".task-container");


// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let id = 0;
//   let titleInput = document.getElementById('input-title-id').value;
//   let desInput = document.getElementById('input-description-id').value;
//   let dateInput = document.getElementById('input-date-id').value;
//   let prioInput = document.getElementById('input-priority-id').value;
//   task[id] = task(titleInput, desInput, dateInput, prioInput)
//   taskDiv.append(task[id].getTitle(), task[id].getDescription(), task[id].getDueDate(), task[id].getPriority())
//   console.log(task[id].getTitle(), task[id].getDescription());
//   id++; 
// })


























   
    // const formCon = () => {
    //     const div = document.createElement("div");
    //     div.classList.add("form-div");

    //     const text = document.createElement("h2");
    //     text.textContent = 'Create a task';

    //     div.append(text);
    //     return div;
    // }

    // const formElements = () => {
    //     const formEl = document.createElement("form");
    //     formEl.classList.add("task-form");
    //     formEl.setAttribute("id", "form-id")

    //     const formFieldset = document.createElement("fieldset");


    //     const formLegend = document.createElement("legend");
    //     formLegend.classList.add("form-leg");
    //     formLegend.innerHTML = 'Add A Task'

    //     const inputTitle = document.createElement("input");
    //     const labelTitle = document.createElement("label");
    //     labelTitle.innerHTML = 'Title:';
    //     inputTitle.name = 'title';
    //     inputTitle.setAttribute("id", "input-title-id");
    //     const inputDes = document.createElement("input");
    //     const labelDes = document.createElement("label");
    //     labelDes.innerHTML = 'Description:';
    //     inputDes.setAttribute("id", "input-description-id")
    //     inputDes.name = 'des';
    //     const inputDate = document.createElement("input");
    //     const labelDate = document.createElement("label");
    //     labelDate.innerHTML = 'Date:';
    //     inputDate.setAttribute("id", "input-date-id");
    //     inputDate.name = 'date';
    //     const inputPrio = document.createElement("input");
    //     const labelPrio = document.createElement("label");
    //     labelPrio.innerHTML = 'Priority:';
    //     inputPrio.setAttribute("id", "input-priority-id");
    //     inputPrio.name = 'priority';
    //     const formBtn = document.createElement("button");
    //     formBtn.classList.add("submit-form");
    //     formBtn.setAttribute("id", "submit-btn-id");
    //     formBtn.innerHTML = 'Submit Form';

    //     formEl.appendChild(formFieldset);
    //     formFieldset.appendChild(formLegend);
    //     formFieldset.appendChild(labelTitle);
    //     formFieldset.appendChild(inputTitle);
    //     formFieldset.appendChild(labelDes);
    //     formFieldset.appendChild(inputDes);
    //     formFieldset.appendChild(labelDate);
    //     formFieldset.appendChild(inputDate);
    //     formFieldset.appendChild(labelPrio);
    //     formFieldset.appendChild(inputPrio);
    //     formFieldset.append(formBtn);

    //     return formEl;
    // }

    
    
    // function appendContent() {
    //     const mainTag = document.querySelector(".main-content");
    //     const formD = formCon();
    //     const formE = formElements();

    //     mainTag.append(formD);
    //     formD.append(formE);
    // }

    // appendContent();

  
