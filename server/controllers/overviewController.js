const { Overview, Admin } = require("../models")

class OverviewController {

    static addDataOverview(req, res) {
        let AdminId = req.dataUser.id
        let inputData = {
            unresolved: 60,
            overdue: 16,
            open: 43,
            onhold: 64,
            resolved: 449,
            received: 426,
            average_first_response: "33m",
            average_response_time: "3h 8m",
            resolution: 94,
            AdminId
        }

        Overview.create(inputData)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getDataOverviewById(req, res) {
        let AdminId = req.dataUser.id
        
        Overview.findAll({
            where: {
                AdminId
            },
            include: Admin
        })
            .then(data => {
                res.status(200).json(data[0])
            })
            .catch(err => {
                res.status(500).json(err)
            })
        
    }

}

module.exports = OverviewController