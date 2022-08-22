const express =  require("express")

const cors = require("cors")


const app = express()

// middlewares....

app.use(express.json())

app.use(cors())

// All All Routes

const Books = require("./Routes/BooksRoute")

const user = require("./Routes/userRoute")

app.use("/api/v1",Books)
app.use("/api/v1",user)

module.exports = app