const express=require("express")
const router=express.Router()

const todoController=require("../controller/ControllerTodos")

router.get("/",todoController.getAllTodos);
router.get("/:id",todoController.getTodoById)
router.post("/",todoController.createNewTodo)
router.delete("/:id",todoController.deleteTodo)
router.put("/",todoController.updateTodo)
router.put("/complete/:id",todoController.updateTodoComplete)



module.exports=router