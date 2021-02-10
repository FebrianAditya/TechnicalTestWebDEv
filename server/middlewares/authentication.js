const { Admin, SuperAdmin } = require("../models")
const { verifyToken } = require("../helpers/generateAdnVerifyToken")

function authenticationAdmin(req, res, next) {
    let access_token = req.headers.access_token

    try {
        let decoded = verifyToken(access_token)

        if(!decoded) {
            res.status(401).json({message: "You must have account"})
        }else {
            let email = decoded.email
            let id = decoded.id
            
            Admin.findOne({
                where: {
                    email,
                    id
                }
            })
                .then(data => {
                    next()
                })
                .catch(err => {
                    res.status(401).json({message: "You must have account"})
                })
        }
    }
    catch(err) {
        res.status(500).json(err)
    }
}

function authenticationSuperAdmin(req, res) {
    let access_token = req.headers.access_token

    try {
        let decoded = verifyToken(access_token)

        if(!decoded) {
            res.status(401).json({message: "You must have account"})
        }else {
            let email = decoded.email
            let id = decoded.id

            SuperAdmin.findOne({
                where: {
                    email,
                    id
                }
            })
                .then(data => {
                    next()
                })
                .catch(err => {
                    res.status(401).json({message: "You must have account"})
                })
        }
    }
    catch(err) {
        res.status(500).json(err)
    }
}

module.exports = {
    authenticationAdmin,
    authenticationSuperAdmin
}