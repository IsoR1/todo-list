class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    getTask(taskName) {
        return this.tasks.find(task => task.title === taskName);
    }

    addTask(task) {
        this.tasks.push(task);
    }

}

export default Project;