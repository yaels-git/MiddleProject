const Users = require("../moduls/Users")
const Users=require("../moduls/Users")
const createNewUser=async(req,res)=>{
    const {phone,address,email,username,name}=req.body
  
    if(!name||!username||!address||!phone){
        return res.status(400).json({message:'name is required'})
    }
    const post=await users.create({name,username,email,address,phone})
    if(post){
        return res.status(201).json({message:'new post created'})
    }else{
        return res.status(400).json({message:"invalid User"})
    }
}
const getAllUsers=async(req,res)=>{
    const users=await User.find().lean()
    if (!users?.length){
        return res.status(400).json({message:"No users found"})
    }
    res.json(users)
}
const updateUsers=async (req,res)=>{
    const {phone,address,email,username,name}=req.body
    if(!name||!username||!address||!phone){
        return res.status(400).json({message:'name is required'})
    }
    const users =await Users.findById(_id).exec()
    if (!users)
        return res.status(400).json({ message: 'users not found' })
    users.phone=phone
    users.address=address
    users.email=email
    users.username=username
    users.name=name
    const updateUsers = await users.save()
    res.json(`'${updatedUser.name}' updated`)
}
const deleteUser=async (req,res)=>{
    const{id}=req.body
    const Users=await Users.findById(id).exec()
    if (!Users)
        return res.status(400).json({ message: 'users not found' })
    const result=await users .deleteOne()
    const reply=`users '${result.name}' ID ${result._id} deleted`
res.json(reply)
}
const getUsersById=async(req,res)=>{
    const {id}=req.params
    const users =await Users.findById(id).lean()
    if (!users)
        return res.status(400).json({ message: 'users not found' })
    res.json(users)

}
module.exports={createNewUser,getAllUsers,updateUsers,deleteUser,getUsersById}