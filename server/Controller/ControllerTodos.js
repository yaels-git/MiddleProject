const Todos = require("../moduls/Todos")

const createNewTodo=async(req,res)=>{
    const {title,tage}=req.body
  
    if(!title){
        return res.status(400).json({message:'name is required'})
    }
    const todos=await Todos.create({title,tage})
    if(todos){
        return res.status(201).json({message:'new todo created'})
    }else{
        return res.status(400).json({message:"invalid todo"})
    }
}
const getAllTodos=async(req,res)=>{
    const todos=await Todos.find().lean()
    if (!todos?.length){
        return res.status(400).json({message:"No todos found"})
    }
    res.json(todos)
}
const updateTodos=async (req,res)=>{
    const {title,body}=req.body
    if(!title){
        return res.status(400).json({message:'name is required'})
    }
    const todos =await Todos.findById(_id).exec()
    if (!todos)
        return res.status(400).json({ message: 'todos not found' })
    todos.title=title
    todos.tage=tage
    
    const updatedTodos = await todos.save()
    res.json(`'${updatedTodos.title}' updated`)
}
const deleteTodos=async (req,res)=>{
    const{id}=req.body
    const Todos=await Todos.findById(id).exec()
    if (!todos)
        return res.status(400).json({ message: 'todos not found' })
    const result=await todos .deleteOne()
    const reply=`todos '${result.title}' ID ${result._id} deleted`
res.json(reply)
}
const getTodossById=async(req,res)=>{
    const {id}=req.params
    const todos =await PoTodossts.findById(id).lean()
    if (!todos)
        return res.status(400).json({ message: 'todos not found' })
    res.json(todos)

}
const updateTodosComplete=async(req, res)=>{
    const { id } = req.params
    const todo=await Todos.findById(id).exec()
    if (!todos)
        return res.status(400).json({ message: 'todos not found' })
    todo.complete = !todo.complete
    const updatedTask = await todo.save()

    res.json(`'${updatedTodos.title}' updated`)
}
module.exports={createNewTodo,getAllTodos,updateTodos,deleteTodos,getTodossById}
