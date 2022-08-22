const mongoose = require("mongoose")

const Book = new mongoose.Schema({
          title:{
                    type:String,
                    required:true
          },
          image:{
                    type:String,
                    required:true
          },
          Author:{
                    type:String,
                    // required:true
          },
          publish:{
                    type:String,
                    required:true
          },
          Description:{
                    type:String,
                    required:true
          },
          Transcript:{
                    type:String,
                    required:true
          }

})

module.exports  = mongoose.model("Book",Book)