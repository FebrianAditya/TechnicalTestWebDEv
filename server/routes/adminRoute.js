const express = require("express")
const route = express.Router()
const AdminController = require("../controllers/adminContoller")

route.post("/register", AdminController.registerAdmin)
route.post("/login", AdminController.loginAdmin)

module.exports = route