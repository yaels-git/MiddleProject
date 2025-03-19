const Posts=require("../modules/Posts")
const createNewPost=async(req,res)=>{
    const{title,body}=req.body
    if(!title){
        return res.status(400).json({message:'name is required'})
    }
    const post=await Posts.create({title,body})
    if(post){
        return res.status(201).json({message:'new post created'})
    }else{
        return res.status(400).json({message:'invalid post'})
    }
}
const getAllPosts=async(req,res)=>{
    const posts=await Posts.find().lean()
    if(!posts?.length){
        return res.status(400).json({message:'No posts found'})
    }
    res.json(posts)
}
const updatePost=async(req,res)=>{
    const{_id,title,body}=req.body
    if(!title){
        return res.status(400).json({message:'name is required'})
    }
    const post=await Posts.findById(_id).exec()
    if(!post){
        return res.status(400).json({message:'Post not found'})
    }
        post.title=title;
        post.body=body;
       
        const updatePost=await post.save()
        res.json(`'${updatePost.title}' updated`)
}
 
const deletePost=async(req,res)=>{
    const{id}=req.body
    const post=await Posts.findById(id).exec()
    if(!post)
        return res.status(400).json({message:'Post not found'})
    const result=await post.deleteOne()
    const reply=`Post '${result.title}' ID ${result._id} deleted`
    res.json(reply)
}

const getPostById=async(res,req)=>{
    const{id}=req.params
    const post=Posts.findById(id)
    if(!post)
        return res.status(400).json({message:'No post found'})
    res.json(post)
}



module.exports={createNewPost,getAllPosts,updatePost,deletePost,getPostById}