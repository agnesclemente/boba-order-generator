const { MongoClient } = require('mongodb')

const url = 'mongodb://127.0.0.1/'
const client = new MongoClient(url)

let dbConnection;
let dailyCollection;
let habitCollection;

const connectToServer = async () => {
    await client.connect()

    dbConnection = client.db("boba");
    drinks = dbConnection.collection("drinks");
    toppings = dbConnection.collection("toppings");
    saved = dbConnection.collection("saved");
}

module.exports = {
    connectToServer: connectToServer,
    getDb: () => {
        return dbConnection;
    },
    getDrinks: () => {
        return drinks;
    },
    getToppings: () => {
        return toppings;
    },
    getSaved: () => {
        return saved;
    }
};