const { Ticket } = require("../models")

class TicketController {

    static getAllDataTickets(req, res) {
        
        Ticket.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })

    }

    static addDataTicket(req, res) {
        const mydate = new Date();
        const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
        const date = mydate.getDate()
        const time = `${mydate.getHours()}:${mydate.getMinutes()}`
        const str = `${month} ${date} ${mydate.getFullYear()}, ${time}`

        let inputData = {
            ticketDetails: req.body.ticketDetails,
            customerName: req.body.customerName,
            date: str,
            status: req.body.status
        }

        Ticket.create(inputData)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
        
    }

    static updateStatusDataTicket(req, res) {

        let id = req.params.id
        let objTicket = {
            status: req.body.status
        }

        Ticket.update(objTicket, {
            where: {
                id
            },
            returning: true
        })
            .then(data => {
                if(data[1].length >= 1) {
                    res.status(200).json(data[1])
                }else {
                    res.status(400).json({ error: "error not found"})
                }
            })
            .catch(err => { 
                res.status(500).json(err)
            })

    }

    static deleteDataTicket(req, res) {

        let id = req.params.id

        Ticket.destroy({
            where: {
                id
            }
        })
            .then(data => {
                if(data) {
                    res.status(200).json({ The_number_of_destroyed_rows: data})
                }else {
                    res.status(400).json({ error: "not found"})
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

}

module.exports = TicketController