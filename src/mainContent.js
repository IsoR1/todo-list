const mainTag = function() {
    const content = document.querySelector("#content");

    const main = () => {
        const tagMain = document.createElement("main");
        tagMain.classList.add("main-content");

        return tagMain;
    }

    const renderMain = () => {
        const mainTag = main();
        content.append(mainTag);
    }

    renderMain();
    
    return mainTag;
}

// export default mainTag
export default mainTag