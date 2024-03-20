const { MongoClient, ServerApiVersion } = require('mongodb');
const Mongo = require("./DB/Mongo")

class Api {

    constructor (mongoClient) {
        this.client = mongoClient
    }

    async isLoginAlreadyUsed ({login, password}) {
        const result = await this.client.db("users").collection("users").findOne({ login });
        if (result) {
            return true
        }
        return false
    }

    async createUser (data) {
        try{
            const result = await this.client.db("users").collection("users").insertOne(data);
            return true
        } catch (e) {
            console.log(e);
            return false
        }
    }

    async getEntireData ({login, password}) {
        try {
            const result = await this.client.db("users").collection("users").findOne({login})
            if (result) {
                if (result.password === password){
                    this.data = result
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


