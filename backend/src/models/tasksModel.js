const connection = require("./connection")

// retornar todas as tasks
const getAll = async() => {
    const [tasks] = await connection.execute("SELECT * FROM tasks")
    return tasks
}

// criar nova task
const createTask = async(task) => {
    const { title } = task

    const dateUTC = new Date(Date.now()).toUTCString();
    const query = "INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)"

    const [createdTask] = await connection.execute(query, [title, "pendente", dateUTC])
    return {insertId: createdTask.insertId}
}

// deletar uma task
const deleteTask = async(id) => {
    const query = "DELETE FROM tasks WHERE id = ?"
    const [removedTask] = await connection.execute(query, [id])
    return removedTask
}

// atualizar uma task
const updateTask = async(id, task) => {
    const {title, status} = task
    const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?"
    const [updatedTask] = await connection.execute(query, [title, status, id])
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}