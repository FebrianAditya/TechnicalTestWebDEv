const { Admin, SuperAdmin } = require("../models")
const { verifyToken } = require("../helpers/generateAdnVerifyToken")

function authentication(req, res, next) {
    let access_token = req.headers.access_token

    try {
        let decoded = verifyToken(access_token)

        if(!decoded) {
            res.status(401).json({message: "You must have account"})
        }else {
            let email = decoded.email
            let id = decoded.id
            req.dataUser = decoded
            
            const getAdmin = Admin.findOne({
                where: {
                    email,
                    id
                }
            })

            const getSuperAdmin = SuperAdmin.findOne({
                where: {
                    email,
                    id
                }
            })

            Promise.all([getAdmin, getSuperAdmin])
                .then(data => {
                    if(data[0] || data[1]) {
                        next()
                    }else {
                        res.status(500).json({ error: "eror dulu yaa"})
                    }
                })
                .catch(err => {
                    res.status(500).json(err)
                })
        }
    }
    catch(err) {
        res.status(500).json(err)
    }
}

module.exports = authentication