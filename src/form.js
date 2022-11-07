const form = function() {
    const content = document.getElementById("content");

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

    
    
    function appendContent() {
        const mainTag = document.querySelector(".main-content");
        const formD = formCon();
        const formE = formElements();

        mainTag.append(formD);
        formD.append(formE);
    }

    appendContent();

    return form
};

export default form;


// title, description, dueDate, priority