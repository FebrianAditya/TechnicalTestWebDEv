const express = require("express")
const route = express.Router()
const authentication = require("../middlewares/authentication")
const TicketController = require("../controllers/ticketController")
const { authorizationSuperAdmin, authorizationAdmin } = require("../middlewares/authorization")

route.use(authentication)
// user Admin
route.get("/", authorizationAdmin, TicketController.getAllDataTickets)
route.patch("/:id", authorizationAdmin, TicketController.updateStatusDataTicket)
route.delete("/:id", authorizationAdmin, TicketController.deleteDataTicket)
// user Super Admin (Only can input ticket to data base)
route.post("/", authorizationSuperAdmin, TicketController.addDataTicket)

module.exports = route