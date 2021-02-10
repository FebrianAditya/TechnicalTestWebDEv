const express = require("express")
const route = express.Router()
const adminRoutes = require("../routes/adminRoute")
const superAdminRoutes = require("../routes/superAdminRoute")
const ticketRoutes = require("../routes/ticketRoute")
const overviewRoutes = require("../routes/overviewRoute")

route.use("/admin", adminRoutes)
route.use("/superadmin", superAdminRoutes)
route.use("/tickets", ticketRoutes)
route.use("/overview", overviewRoutes)

module.exports = route