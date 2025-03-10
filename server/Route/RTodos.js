const express=require("express")
const router=express.Router()
const ControllerTodos=require("../Controller/ControllerTodos")


router.get("/",ControllerTodos.getAllTodos)
router.get("/:id", ControllerTodos.getTodossById)
router.post("/", ControllerTodos.createNewTodo)
router.delete("/",ControllerTodos.deleteTodos)
router.put("/",ControllerTodos.updateTodos)
router.put("/complete/:id",ControllerTodos.updateTodos)
module.exports = router