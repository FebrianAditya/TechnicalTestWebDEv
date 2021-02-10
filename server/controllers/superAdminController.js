const { SuperAdmin } = require("../models")
const bcrypt = require("bcryptjs")
const { generateToken } = require("../helpers/generateAdnVerifyToken")


class SuperAdminController {

    static registerSuperAdmin(req, res) {
        let inputData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            role: "superadmin",
            password: req.body.password
        }

        SuperAdmin.create(inputData)
            .then(data => {
                res.status(201).json({ name: data.fullName(), email: data.email })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static loginSuperAdmin(req, res) {
        let email = req.body.email
        let password = req.body.password
        let role = "superadmin"

        SuperAdmin.findOne({
            where: {
                email,
                role
            }
        })
            .then(data => {
                if(data) {
                    let passwordInDataBase = data.password
                    if(bcrypt.compareSync(password, passwordInDataBase)) {
                        let access_token = generateToken({ name: data.fullName(), email: data.email, id: data.id })
                        res.status(200).json({ access_token: access_token })
                    }else {
                        res.status(400).json({ message: "Password/Email Invalid" })
                    }
                }else {
                    console.log("---");
                    res.status(400).json({ message: "Password/Email and Role Invalid" })
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

}

module.exports = SuperAdminController