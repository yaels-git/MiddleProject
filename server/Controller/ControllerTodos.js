const Todos=require("../modules/Todos")
const createNewTodo=async(req,res)=>{
    console.log("ddddddddddd");
    const{title,tags}=req.body
    if(!title){
        return res.status(400).json({message:'name is required'})
    }
    const todo=await Todos.create({title,tags})
    if(todo){
        return res.status(201).json({message:'new todo created'})
    }else{
        return res.status(400).json({message:'invalid todo'})
    }
}
const getAllTodos=async(req,res)=>{
    const todos=await Todos.find().lean()
    // if(!todos?.length){
    //     return res.status(400).json({message:'No todos found'})
    // }
    res.json(todos)
}
const updateTodo=async(req,res)=>{
    const{_id,title,tags}=req.body
    if(!title){
        return res.status(400).json({message:'name is required'})
    }
    const todo=await Todos.findById(_id).exec()
    if(!todo){
        return res.status(400).json({message:'Todo not found'})
    }
        todo.title=title
        todo.tags=tags
        const updateTodo=await todo.save()
        res.json(`'${updateTodo.title}' updated`)
}
 
const deleteTodo=async(req,res)=>{
    const{id}=req.params
    const todo=await Todos.findById(id).exec()
    if(!todo)
        return res.status(400).json({message:'Todo not found'})
    const result=await todo.deleteOne()
    const reply=`todo '${result.name}' ID ${result._id} deleted`
    res.json(reply)
}

const getTodoById=async(res,req)=>{
    const{id}=req.params
    const todo=Todos.findById(id)
    if(!todo)
        return res.status(400).json({message:'No todo found'})
    res.json(todo)
}
const updateTodoComplete=async(req,res)=>{
    const{id}=req.params
    const todo=await Todos.findById(id)
    if(!todo)
        return res.status(400).json({message:'Task not found'})
    todo.completed=!todo.completed
    const updateTodo=await Todos.save()
    res.json(`'${updateTodo.title}' update`)
}



module.exports={createNewTodo,getAllTodos,updateTodo,deleteTodo,getTodoById,updateTodoComplete}