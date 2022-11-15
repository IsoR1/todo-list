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

    removeTask(id) {
        this.tasks.splice(id, 1);
    }

}

export default Project;