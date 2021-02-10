const express = require("express")
const route = express.Router()
const OverviewController = require("../controllers/overviewController")
const authentication = require("../middlewares/authentication")
const { authorizationAdmin } = require("../middlewares/authorization")

route.use(authentication)
// all data in table overview im use dummy data (hardcore), because i dont know i get data overview from where
route.get("/", authorizationAdmin, OverviewController.getDataOverviewById)
route.post("/", authorizationAdmin, OverviewController.addDataOverview)

module.exports = route