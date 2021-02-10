const { SuperAdmin, Admin } = require("../models")

function authorizationSuperAdmin(req, res, next) {
    let role = req.dataUser.role
    let id = req.dataUser.id

    SuperAdmin.findByPk(id)
        .then(data => {
            if(data.role === role) {
                next()
            }else {
                res.status(400).json({ error: "You dont have permission" })
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        });

}

function authorizationAdmin(req, res, next) {
    let role = req.dataUser.role
    let id = req.dataUser.id

    Admin.findByPk(id)
        .then(data => {
            if(data.role === role) {
                next()
            }else {
                res.status(400).json({ error: "You dont have permission" })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

module.exports = {
    authorizationSuperAdmin,
    authorizationAdmin
}