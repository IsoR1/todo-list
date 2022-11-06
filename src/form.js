const form = function() {
    const content = document.getElementById("content");

    const formDiv = () => {
        const div = document.createElement("div");
        div.classList.add("form-div");

        return div;
    }

    const formElements = () => {
        const formEl = document.createElement("form");

        const formFieldset = document.createElement("fieldset");


        const formLegend = document.createElement("legend");
        formLegend.classList.add("form-leg");
        formLegend.innerHTML = 'Add A Task'

        const inputTitle = document.createElement("input");
        inputTitle.name = 'title';
        inputTitle.value = 'Title';
        const inputDes = document.createElement("input");
        inputDes.name = 'des';
        inputDes.value = 'Description';
        const inputDate = document.createElement("input");
        inputDate.name = 'date';
        inputDate.value = 'Date';
        const inputPrio = document.createElement("input");
        inputPrio.name = 'priority';
        inputPrio.value = 'Priority';

        formEl.appendChild(formFieldset);
        formFieldset.appendChild(formLegend);
        formFieldset.appendChild(inputTitle);
        formFieldset.appendChild(inputDes);
        formFieldset.appendChild(inputDate);
        formFieldset.appendChild(inputPrio);

        return formEl;
    }
    
    function appendContent() {
        const formD = formDiv();
        const formE = formElements();

        content.append(formD);
        formD.append(formE);
    }

    appendContent();

    return form
};

export default form;


// title, description, dueDate, priority