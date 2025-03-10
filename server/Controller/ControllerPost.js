const Posts = require("../moduls/Posts")

const createNewPost=async(req,res)=>{
    const {title,body}=req.body
  
    if(!title){
        return res.status(400).json({message:'name is required'})
    }
    const post=await Posts.create({title,body})
    if(post){
        return res.status(201).json({message:'new post created'})
    }else{
        return res.status(400).json({message:"invalid post"})
    }
}
const getAllPosts=async(req,res)=>{
    const posts=await Posts.find().lean()
    if (!posts?.length){
        return res.status(400).json({message:"No posts found"})
    }
    res.json(posts)
}
const updateposts=async (req,res)=>{
    const {title,body}=req.body
    if(!title){
        return res.status(400).json({message:'name is required'})
    }
    const posts =await Posts.findById(_id).exec()
    if (!posts)
        return res.status(400).json({ message: 'posts not found' })
    posts.title=title
    posts.body=body
    
    const updatedPosts = await posts.save()
    res.json(`'${updatedPosts.title}' updated`)
}
const deletepost=async (req,res)=>{
    const{id}=req.body
    const Posts=await Posts.findById(id).exec()
    if (!posts)
        return res.status(400).json({ message: 'posts not found' })
    const result=await posts .deleteOne()
    const reply=`post '${result.title}' ID ${result._id} deleted`
res.json(reply)
}
const getPostsById=async(req,res)=>{
    const {id}=req.params
    const posts =await Posts.findById(id).lean()
    if (!posts)
        return res.status(400).json({ message: 'posts not found' })
    res.json(posts)

}
module.exports={createNewPost,getAllPosts,updateposts,deletepost,getPostsById}
