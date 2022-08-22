
const app = require("./App")

const dotenv = require("dotenv")

// const cors = require("cors")

// setiing up Config...

dotenv.config({path:"config/config.env"})

// Import Database....

// app.use(cors())
const Connectdatabase = require("./config/database")

Connectdatabase()


app.listen(process.env.PORT,()=>{
          console.log(`Server is runing on ${process.env.PORT} port`);
})
