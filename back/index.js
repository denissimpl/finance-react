const Api = require('./api')
const express = require('express')
const cors = require('cors')
const registerController = require("./serverControllers/registerController");
const loginController = require("./serverControllers/loginController");
const chartController = require("./serverControllers/chartController");
const {call} = require("express");
const Mongo = require("./DB/Mongo");


require('dotenv').config();
const URI = process.env.DB_CONN;
const PORT = process.env.SERVER_PORT


const mongo = new Mongo(URI)
mongo.connectMongo()


const api = new Api(mongo.client)


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const requestWrapper = async (req,res, callback) => {
  await req.on("data", async data => {
    const user = JSON.parse(data.toString())
    try {
      const response = await callback(user, api, callback)
      res.send(JSON.stringify(response))
    } catch (e) {
      res.send(JSON.stringify({
        status: false,
        reason: "uncatched error. "
      }))
    }
  })
}


app.post('/register', async function (req, res) {
  await requestWrapper(req, res, registerController)
})


app.post('/login', async function (req, res) {
  await requestWrapper(req, res, loginController)
})


app.post('/charts', async function (req, res) {
  await requestWrapper(req, res, chartController)
})


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})


process.on('exit',async function (){
  await mongo.closeMongo()
});
