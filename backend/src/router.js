const express = require("express")
const tasksController = require("./controllers/tasksController")
const tasksMiddlewares = require("./middlewares/tasksMiddlewares")

const router = express.Router()

// listar todas as tasks
router.get("/tasks", tasksController.getAll)

// criar uma nova task
router.post("/tasks", tasksMiddlewares.validateFieldTitle, tasksController.createTask)

// deletar uma task
router.delete("/tasks/:id", tasksController.deleteTask)

// atualizar uma task
router.put("/tasks/:id",
tasksMiddlewares.validateFieldTitle,
tasksMiddlewares.validateFieldStatus,
tasksController.updateTask)

module.exports = router