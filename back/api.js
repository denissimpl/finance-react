const { MongoClient, ServerApiVersion } = require('mongodb');

class Api {
    constructor (uri) {
        this.client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
          this.data = {}
    }

    async connectMongo () {
        await this.client.connect()
    }

    async closeMongo () {
        await this.client.close()
    }
    

    async checkLoginFreeness ({login, password}) {
        const result = await this.client.db("users").collection("users").findOne({ login });
        if (result) {
            return false
        }
        return true
    }

    async createUser (data) {
        try{
            const result = await this.client.db("users").collection("users").insertOne(data);
            console.log(`New listing created with the following id: ${result.insertedId}`);
            return true
        } catch (e) {
            console.log(e);
            return false
        }
    }

    static validateUser (login, password) {
        const validation = {status: true, reason: []}
        if (login.length <2 || password.length <3){
            validation.status = false
            validation.reason.push("Слишком короткий логин или пароль. ")
        } 
        if (login == password) {
            validation.status = false
            validation.reason.push("Логин и пароль не должны совпадать. ")
        }
        if (login.length > 20 || password.length > 32){
            validation.status = false
            validation.reason.push("Слишком длинный логин или пароль. ")
        }
        return validation
    }

    async getEntireData ({login, password}) {
        console.log(login,password);
        try {
            const result = await this.client.db("users").collection("users").findOne({login})
            if (result) {
                if (result.password === password){
                    this.data = result
                    console.log(result);
                    return result
                }
                return false
            } else {
                return false
            }
        } catch (e) {
            console.log(e);
            return false
        }
    }

    async updateData (data) {
        try {
            if (data.type === "income") {
                const result = await this.client.db("users").collection("users").updateOne({ login: data.data.login }, {
                $push: {
                    income: {
                      name: data.data.name,
                      amount: data.data.amount,
                      date: data.data.date
                    }
                  }
                });
              } else {
                const result = await this.client.db("users").collection("users").updateOne({ login: data.data.login }, {
                $push: {
                    expenses: {
                      name: data.data.name,
                      amount: data.data.amount,
                      date: data.data.date
                    }
                  }
                });
              }
            return await this.getEntireData({login: data.data.login, 
                password: data.data.password})
        } catch (e) {
            console.log(e);
            return false
        }
    }

    async handleData (data) {

        try{
            const result = await this.client.db("users").collection("users").updateOne({login: data.data.login},{$set: {
                income: data.data.income, 
                expenses: data.data.expenses
            }})
            this.data = data.data
            return this.data
        } catch (e) {
            console.log(e);
            return false
        }
    }

    getData() {
        return this.data
    }
}

module.exports = Api


