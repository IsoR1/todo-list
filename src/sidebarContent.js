const sidebar = function() {
    const content = document.getElementById("content"); 

    const createDiv = (className) => {
        const div = document.createElement("div");
        div.classList.add(className);

        return div
    }

    const projectList = () => {
        const div = document.createElement("div");
        div.classList.add("project-list-div");

        const text = document.createElement("h3");
        text.classList.add("project-list-text");
        text.textContent = 'Projects';
    }



    const renderSidebarContent = () => {
        const sidebarDiv = createDiv("sidebar-div")
        const projectListDiv = projectList();

        content.append(sidebarDiv);
        sidebarDiv.append(projectListDiv);
    }

    renderSidebarContent()
    
    return sidebar;
}

export default sidebar