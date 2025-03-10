const express=require("express")
const router=express.Router()
const ControllerUsers=require("../Controller/ControllerUser")


router.get("/",ControllerUsers.getAllUsers)
router.get("/:id", ControllerUsers.getUsersById)
router.post("/", ControllerUsers.createNewUser)
router.delete("/",ControllerUsers.deleteUser)
router.put("/",ControllerUsers.updateUsers)

module.exports = router