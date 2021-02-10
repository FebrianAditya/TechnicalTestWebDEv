const express = require("express")
const route = express.Router()
const { authenticationAdmin, authenticationSuperAdmin } = require("../middlewares/authentication")
const TicketController = require("../controllers/ticketController")

route.use(authenticationAdmin)
route.get("/", TicketController.getAllDataTickets)
route.patch("/", TicketController.updateStatusDataTicket)
route.delete("/", TicketController.deleteDataTicket)

route.use(authenticationSuperAdmin)
route.post("/", TicketController.addDataTicket)

module.exports = route