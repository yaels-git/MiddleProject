const mongoose=require("mongoose")
const PostsSchema=mongoose.Schema({
    titel:{
        type:String,
        required:true
    },
    body:{
        type:String,
       
    }

},{timstamps:true})
module.exports=mongoose.model("Post",PostsSchema)
