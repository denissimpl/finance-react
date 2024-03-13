// import { store } from "../../redux";

// let instance: object;

// class Socket {
//     private socket:WebSocket = new WebSocket("ws://localhost:5555")

//     constructor() {
//         if (instance) {
//         throw new Error("You can only create one instance!");
//         }
//         instance = this;
//     }


//   getInstance() {
//     return this;
//   }

//   setOnMessage (callback: Function) {
//     this.socket.onmessage = (event) => callback(event)
//   }

//   sendMessage (message: Object) {
//     this.socket.send(JSON.stringify(message))
//   }

// }

// const singletonSocket = new Socket();

// console.log(store.getState().userData);

// singletonSocket.sendMessage()

// export default Object.freeze(singletonSocket);
