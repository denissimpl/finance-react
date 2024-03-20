const { MongoClient, ServerApiVersion } = require('mongodb');

class Mongo {
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

}

module.exports = Mongo