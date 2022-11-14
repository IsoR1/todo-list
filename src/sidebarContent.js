const sidebar = function() {
    const content = document.getElementById("content"); 

    const createDiv = (className) => {
        const div = document.createElement("div");
        div.classList.add(className);

        return div
    }

    const projectsText = () => {
        const div = createDiv("sidebar-nav");

        
        const text = document.createElement("h3");
        text.classList.add("project-list-text");
        text.textContent = 'Projects';

        div.append(text);
        return div;
    }

    const projectList = () => {
        const div = document.createElement("div");
        div.classList.add("project-list-con");


        return div;
    }

    const renderProjectSvg = () => {
        const svg = document.createElement("img");
        svg.src = './assets/plus.svg';
        svg.classList.add("project-svg");
        svg.classList.add("svg");

        return svg
    }

    const renderSidebarContent = () => {
        const sidebarDiv = createDiv("sidebar-div");
        const svg = renderProjectSvg();
        const nav = projectsText();
        const projectListDiv = createDiv("project-list-con");

        content.append(sidebarDiv);
        sidebarDiv.append(nav);
        nav.append(svg)
        nav.append(projectListDiv);
    }

    renderSidebarContent()

    return sidebar;
}

export default sidebar