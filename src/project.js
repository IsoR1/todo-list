const project = (name) => {
    let taskList = [];

    const getName = () => name;
    const getTaskList = () => taskList
    const addToTaskList = (task) => taskList.push(task);

    return { getName, getTaskList, addToTaskList }
}

export default project;