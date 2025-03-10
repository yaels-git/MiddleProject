const mongoose=require("mongoose")
const TodosSchema=mongoose.Schema({
    titel:{
        type:String,
        required:true
    },
    tage:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false

    }

},{
    timestamps:true
})
module.exports=mongoose.model("Todo",TodosSchema)
