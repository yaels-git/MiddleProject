const mongoos=require('mongoose')
const TodosSchema=new mongoos.Schema({
    title:{
        type:String,
        required:true
    },
    tags:{
        type:[String]
    },
    completed:{
        type:Boolean,
        default:false
    }

},{
    timestamps:true
})

module.exports=mongoos.model('Todo',TodosSchema)