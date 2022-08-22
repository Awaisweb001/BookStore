const Users = require("../Models/User")

exports.SignUpUser = async (req,res,next)=>{
          const User = req.body
          console.log(User);
          const {Name,Email,Password,ConfirmPassword} = User

          const AlreadyExist = await Users.findOne({Email:Email})

          if(AlreadyExist){
                    res.status(200).json({
                              msg:"Email Already Exists",
                    })
          }
          else{
                    Users.create({Name:Name,Email:Email,Password:Password,ConfirmPassword:ConfirmPassword},(err,post)=>{
                              if(err){
                                        console.log(err,"This is Error")
                              }
                              else{
                                        res.status(200).json({
                                                  msg:"Account Create SucessFuly",
                                                  user:post
                                        })
                              }
                    })
          }
                    
   

}

exports.login = async (req,res,next)=>{
          const {Email,Password} = req.body
          const ExitUser = await Users.findOne({Email:Email})

          if(ExitUser){
                    if(ExitUser.Password == Password){
                              res.status(200).json({
                                        msg:"Login SucessFull",
                                        User:ExitUser
                              })
                    }
                    else{
                              res.status(200).json({
                                        msg:"Password is incorrect"
                              })
                    }
          }
          else{
                    res.status(200).json({
                              msg:"User Not Found"
                    })
          }
}