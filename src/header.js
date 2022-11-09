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

    const plusSvg = () => {
        const svg = document.createElement("img");
        svg.src = './assets/plus.svg';
        svg.classList.add("plus-svg")

        return svg;
    }

    const homePlusDiv = () => {
        const div = document.createElement("div");
        div.classList.add("home-plus-div");

        return div;
    }


    function createHeader() {
        const header = createHeaderTag();
        const centerText = createHeaderText();
        const divHomePlus = homePlusDiv();
        const svgMenu = menuSvg();
        const svgHome = homeSvg();
        const svgPlus = plusSvg();

        content.append(header);
        header.append(svgMenu);
        header.append(centerText);
        header.append(divHomePlus);
        divHomePlus.append(svgPlus)
        divHomePlus.append(svgHome);
    }

    createHeader();

    return header;
}

export default header