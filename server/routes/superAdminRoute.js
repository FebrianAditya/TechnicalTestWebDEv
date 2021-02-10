const express = require("express")
const route = express.Router()
const SuperAdminController = require("../controllers/superAdminController")

route.get("/")
route.post("/register", SuperAdminController.registerSuperAdmin)
route.post("/login", SuperAdminController.loginSuperAdmin)
// route.post("/addticket")
// route.patch("/updateticket")
// route.delete("/deleteticket")

module.exports = route