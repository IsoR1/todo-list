const sidebar = function() {
    const content = document.getElementById("content"); 

    const createEl = (tag, className) => {
        const el = document.createElement(tag);
        el.classList.add(className);
    
        return el;
    };

    const dateButtons = () => {
        const containerDiv = createEl("div", "sidebar-dates-container");

        const textToday = createEl("p", "date-today");
        textToday.classList.add('date')
        textToday.textContent = "Today"
        const textWeek = createEl("p", "date-week");
        textWeek.classList.add('date')
        textWeek.textContent = 'This Week'
        const textMonth = createEl("p", "date-month");
        textMonth.classList.add("date")
        textMonth.textContent = "This Month"

        containerDiv.append(textToday);
        containerDiv.append(textWeek);
        containerDiv.append(textMonth);

        return containerDiv;
    }

    const projectsText = () => {
        const div = createEl("div", "sidebar-nav");

        
        const text = createEl("h3", "project-list-text");
        text.textContent = 'Projects';

        div.append(text);
        return div;
    }

    const projectList = () => {
        const div = createEl("div", "project-list-con");

        return div;
    }

    const renderProjectSvg = () => {
        const svg = createEl("img", "project-svg");
        svg.src = './assets/plus.svg';
        svg.classList.add("svg")

        return svg
    }

    const renderSidebarContent = () => {
        const dates = dateButtons();
        const sidebarDiv = createEl("div", "sidebar-div");
        const svg = renderProjectSvg();
        const nav = projectsText();
        const projectListDiv = createEl("div", "project-list-con");

        content.append(sidebarDiv);
        sidebarDiv.append(dates)
        sidebarDiv.append(nav);
        nav.append(svg)
        nav.append(projectListDiv);
    }

    renderSidebarContent()

    return sidebar;
}

export default sidebar