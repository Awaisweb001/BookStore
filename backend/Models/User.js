const mongoose = require("mongoose")

const user = new mongoose.Schema({
          Name:{
                    type:String,
                    required:true,
          },
          Email:{
                    type:String,
                    required:true,
                    trim:true
          },
          Password:{
                    type:String,
                    required:true,
                    trim:true
          },
          ConfirmPassword:{
                    type:String,
                    required:true,
                    trim:true
          },
          user:{
                    type:Boolean,
                    default:false
                    
          },
          craetedAt:{
                    type:Date,
                    default:Date.now
          }
}
)

module.exports  = mongoose.model("user",user)