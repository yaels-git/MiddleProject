const express=require("express")
const router=express.Router()

const todoController=require("../Controller/ControllerTodos")

router.get("/",todoController.getAllTodos);
router.get("/:id",todoController.getTodoById)
router.post("/",todoController.createNewTodo)
router.delete("/",todoController.deleteTodo)
router.put("/",todoController.updateTodo)
router.put("/complete/:id",todoController.updateTodoComplete)



module.exports=router