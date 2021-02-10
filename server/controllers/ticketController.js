const { Ticket } = require("../models")

class TicketController {

    static getAllDataTickets(req, res) {
        res.status(200).json({ message: "getAllData"})
    }

    static addDataTicket(req, res) {
        res.status(201).json({ message: "addData"})
    }

    static updateStatusDataTicket(req, res) {
        res.status(200).json({ message: "updateData"})
    }

    static deleteDataTicket(req, res) {
        res.status(200).json({ message: "deleteData"})
    }

}

module.exports = TicketController