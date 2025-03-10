
module.exports=mongoose.model("Todo",TodosSchema)
const mongoose =require("mongoose")
const usersSchema=mongoose.Schema({
    name:{
        type:String,
        required :true

    },
    username:{
        type :String,
        required:true
    },
    email:{
        type:String

    },address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        require :true
    },
    
},{ timestamps:true
    
})
module.exports=mongoose.model ('User',usersSchema)