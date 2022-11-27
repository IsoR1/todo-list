class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.tasks = [];
    }

    getTask(taskName) {
        return this.tasks.find(task => task.title === taskName);
    }

    getTaskId(taskId) {
        return this.tasks.find(task => task.id === taskId)
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(id) {
        this.tasks.splice(id, 1);
    }

    getTasks() {
        return this.tasks;
    }
}

export default Project;