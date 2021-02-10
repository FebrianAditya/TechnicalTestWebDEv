const express = require("express")
const route = express.Router()
const SuperAdminController = require("../controllers/superAdminController")

route.post("/register", SuperAdminController.registerSuperAdmin)
route.post("/login", SuperAdminController.loginSuperAdmin)

module.exports = route