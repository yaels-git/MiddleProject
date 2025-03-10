const express=require("express")
const router=express.Router()
const Controllerpost=require("../Controller/ControllerPost")
router.get("/",Controllerpost.getAllPosts)
router.get("/:id", Controllerpost.getPostsById)
router.post("/", Controllerpost.createNewPost)
router.delete("/",Controllerpost.deletepost)
router.put("/",Controllerpost.updateposts)

module.exports = router