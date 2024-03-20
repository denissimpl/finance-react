const WebSocket = require('ws');
const Api = require('./../api')
const Mongo = require("../DB/Mongo");
require('dotenv').config();
const URI = process.env.DB_CONN;
const PORT = process.env.SOCKET_PORT

const mongo = new Mongo(URI)
mongo.connectMongo()
const api = new Api(mongo.client)
const wsServer = new WebSocket.Server({port: PORT});


wsServer.on('connection', onConnect);

async function handleAction(message) {
  switch (message.method){
    case "GET":
      return await api.getEntireData(message)
    case "PUT":
      return await api.updateData(message)
    case "DELETE":
      return await api.handleData(message)
  }
}




async function onConnect(wsClient) {
  wsClient.broadcast = function(data) {
    wsServer.clients.forEach(client => client.send(JSON.stringify(data)))
  }
  wsClient.on('message', async function(message) {
    console.log(JSON.parse(message));
    result = await handleAction(JSON.parse(message))
    wsClient.broadcast(result)
  })
  
}

process.on('exit',async function (){
  await api.closeMongo()  
});

