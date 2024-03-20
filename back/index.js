const Api = require('./api')
const express = require('express')
const cors = require('cors')


require('dotenv').config();
const URI = process.env.DB_CONN;
const PORT = process.env.SERVER_PORT

const api = new Api(URI)
api.connectMongo()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))




app.post('/register', async function (req, res) {
  let user;
  await req.on("data", async data => {
    try {
      user = JSON.parse(data.toString())
      const {login, password} = user
      validation = Api.validateUser(login,password)
      if (!validation.status) {
        res.send(JSON.stringify({
          status: false,
          reason: validation.reason
        }))
        return
      } 
      const free = await api.checkLoginFreeness({login, password})
      if (!free) {
        res.send(JSON.stringify({
          status: false,
          reason: "Имя уже занято. "
        }))
        return
      }
      const success = await api.createUser({
        login, 
        password, 
        income: [],
        expenses:  [],
      })
      if (!success) {
        res.send(JSON.stringify({
          status:success,
          reason: "creation error. "
        }))
        return
      }
      res.send(JSON.stringify({
        status:success,
        login,
        password
      }))

    } catch (e) {
      console.log(e);
      res.send(JSON.stringify({
        status: false,
        reason: "uncatched error. "
      }))
      return
    }
  })
})

app.post('/login', async function (req, res) {
  let user;
  await req.on("data",async data => {
    try {
      user = JSON.parse(data.toString())
      const {login, password} = user
      const status = await api.getEntireData({login, password})
      if (!status) {
        res.send(JSON.stringify({
          status,
          reason: "Неверное имя пользователя или пароль. "
        }))
        return
      }
      res.send(JSON.stringify({
        status: true,
        login,
        password
      }))
    } catch (e) {
      console.log(e);
      res.send(JSON.stringify({
        status: false,
        reason: "uncatched error. "
      }))
      return
    }
  })
})

app.post('/charts', async function (req, res) {
  let user;
  await req.on("data",async data => {
    try {
      user = JSON.parse(data.toString())
      let {login, password} = user
      let result = await api.getEntireData({login, password})
      console.log(result);
      res.send(result)
    } catch (e) {
      console.log(e);
      res.send(JSON.stringify({
        status: false,
        reason: "uncatched error. "
      }))
      return
    }
  })
})


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})


process.on('exit',async function (){
  await api.closeMongo()  
});
