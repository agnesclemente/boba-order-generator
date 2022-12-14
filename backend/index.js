const express = require("express");
const db = require("./db");
var cors = require("cors");
var ObjectId = require("mongodb").ObjectId;
// Create our app
const app = express();

// Make sure we are only accepting/outputting JSON
app.use(express.json());
app.use(cors());

app.get("/drinks", async (req, res) => {
    let drinks = await db.getDrinks().find().toArray();
    res.status(200);
    res.send(drinks);
});

app.get("/toppings", async (req, res) => {
    let toppings = await db.getToppings().find().toArray();
    res.status(200);
    res.send(toppings);
});

app.get("/saved", async (req, res) => {
    let saved = await db.getSaved().find().toArray();
    res.status(200);
    res.send(saved);
});

app.post("/saved/add", async (req, res) => {
    const { drink, toppings } = req.body;
    const order = {
        drink: drink,
        toppings: toppings,
    }
    let result = await db.getSaved().insertOne(order);
    res.status(200);
    res.send(result.insertedId);
});

app.delete("/saved/delete", async (req, res) => {
    const { orderId } = req.body;
    let result = await db.getSaved().deleteOne({
        "_id": ObjectId(orderId)
    });
    res.status(200);
    console.log(result);
    res.send(result);
});

// app.post("/drinks/add", async (req, res) => {
//     const { name, imgSrc } = req.body;
//     console.log("h", date);
//     const data = {
//         date: new Date(date),
//         note: note,
//         wins: wins,
//         losses: losses,
//         value: value,
//     };
//     let result = await db.getDailyCollection().insertOne(data);
//     res.status(200);
//     res.send(result.insertedId);
// });

db.connectToServer();

// Listen on port 5000 - change this if you get an error "port already in use"
app.listen(5000, async () => {
    console.log("Server is running on port 5000");
});
