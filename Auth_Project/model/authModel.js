const mongoose=require("mongoose")
const authSchema= moongoose.schema({
    name:{
        type:String,
        minLength:3,
        required:true,
        trim:true,
    },
});