const express = require("express")
const route = express.Router()
const adminRoutes = require("../routes/adminRoute")
const superAdminRoutes = require("../routes/superAdminRoute")
const ticketRoutes = require("../routes/ticketRoute")

route.use("/admin", adminRoutes)
route.use("/superadmin", superAdminRoutes)
route.use("/tickets", ticketRoutes)

module.exports = route