const header = function() {
    const content = document.getElementById("content");

    const createHeaderTag = () => {
        const header = document.createElement("header");
        header.classList.add("header-tag");

        return header;
    }

    const createHeaderText = () => {
        const text = document.createElement("h1");
        text.textContent = 'Things to do';
        text.classList.add("header-text");

        return text;
    }

    const menuSvg = () => {
        const svg = document.createElement("img");
        svg.src = './assets/menu.svg'
        svg.classList.add("menu-svg");

        return svg;
    }

    const homeSvg = () => {
        const svg = document.createElement("img");
        svg.src = './assets/home.svg';
        svg.classList.add("home-svg");

        return svg;
    }




    function createHeader() {
        const header = createHeaderTag();
        const centerText = createHeaderText()
        const svgMenu = menuSvg();
        const svgHome = homeSvg();

        content.append(header);
        header.append(svgMenu);
        header.append(centerText);
        header.append(svgHome);
    }

    createHeader();

    return header;
}

export default header