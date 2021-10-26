import express from "express";
import 'dotenv/config'
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

import positionsRoutes from "./routes/positions.js";

const PORT = 5000;
const URI = process.env.DB_CONNECTION;
const app = express();

//Middleware
app.use(express.json());


//Router
app.get("/", (req, res) => {
    res.send("Welcome to the PD Library API")
});
app.use('/positions', positionsRoutes);

//Listen
app.listen(PORT, () => {
    console.log(`PD Library API started on PORT https://localhost:${PORT}`)
});


mongoose.connect(URI, () => {
    console.log("Connected to db")
});

// const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("3");
//   // perform actions on the collection object
//   client.close();
// });