const Users=require("../modules/Users")
const createNewUser=async(req,res)=>{
    const{name,username,email,address,phone}=req.body
    if(!name||!username||!address||!phone){
        return res.status(400).json({message:'name is required'})
    }
    const user=await Users.create({name,username,email,address,phone})
    if(user){
        return res.status(201).json({message:'new user created'})
    }else{
        return res.status(400).json({message:'invalid user'})
    }
}
const getAllUsers=async(req,res)=>{
    const users=await Users.find().lean()
    if(!users?.length){
        return res.status(400).json({message:'No users found'})
    }
    res.json(users)
}
const updateUser=async(req,res)=>{
    const{_id,name,username,email,address,phone}=req.body
    if(!name||!username||!address||!phone){
        return res.status(400).json({message:'name is required'})
    }
    const user=await Users.findById(_id).exec()
    if(!user){
        return res.status(400).json({message:'User not found'})
    }
        user.name=name;
        user.username=username;
        user.email=email;
        user.address=address;
        user.phone=phone;
        const updateUser=await user.save()
        res.json(`'${updateUser.name}' updated`)
}
 
const deleteUser=async(req,res)=>{
    const{id}=req.body
    const user=await Users.findById(id).exec()
    if(!user)
        return res.status(400).json({message:'User not found'})
    const result=await user.deleteOne()
    const reply=`user '${result.name}' ID ${result._id} deleted`
    res.json(reply)
}

const getUserById=async(res,req)=>{
    const{id}=req.params
    const user=Users.findById(id)
    if(!user)
        return res.status(400).json({message:'No user found'})
    res.json(user)
}



module.exports={createNewUser,getAllUsers,updateUser,deleteUser,getUserById}