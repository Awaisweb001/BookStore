const mongoose = require("mongoose")

const dotenv = require("dotenv")

dotenv.config({path:"config/config.env"})


const Connectdatabase = ()=>{
          mongoose.connect(process.env.LOCAL_URL).then((con)=>{
                    console.log(`Mongoo Db is Connected with ${con.connection.host} in 
                    ${process.env.DEV_MODE}`);
          })
}
module.exports = Connectdatabase
