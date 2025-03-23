const express=require("express")
const router=express.Router()

const userController=require("../Controller/ControllerUsers")

router.get("/",userController.getAllUsers);
router.get("/:id",userController.getUserById)
router.post("/",userController.createNewUser)
router.delete("/:id",userController.deleteUser)
router.put("/",userController.updateUser)


module.exports=router