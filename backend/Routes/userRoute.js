const express = require("express")

const router = express.Router()

const {SignUpUser,login} = require("../Controllers/User")

router.route("/usersignup/new").post(SignUpUser)
router.route("/userLogin/new").post(login)

module.exports = router