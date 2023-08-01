const tasksModel = require("../models/tasksModel")

// listar todas as tasks
const getAll = async(request, response) => {
    const tasks = await tasksModel.getAll()

    return response.status(200).json(tasks)
}

// criar nova task
const createTask = async(request, response) => {
    const createdTask = await tasksModel.createTask(request.body)
    return response.status(201).json(createdTask)
}

// deletar uma task
const deleteTask = async(request, response) => {
    const {id} = request.params

    await tasksModel.deleteTask(id)
    
    return response.status(204).json()
}

// atualizar uma task
const updateTask = async(request, response) => {
    const {id} = request.params

    await tasksModel.updateTask(id, request.body);
    return response.status(204).json()
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}