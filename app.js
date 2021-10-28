import express from "express";
import 'dotenv/config'
import mongoose from "mongoose";
import cors from "cors";

import positionsRoutes from "./routes/positions.js";

const PORT = process.env.PORT || 5000;
const URI = process.env.DB_CONNECTION;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
    //Serve index.html and index.css
app.use(express.static("web"));

// Router
app.get("/api", (req, res) => {
    try {
        res.status(200).send({ running: true})
    } catch (error) {
        res.status(500 ).send({running: false})
    }
});
app.use('/api/positions', positionsRoutes);

// Listen
app.listen(PORT, () => {
    console.log(`PD Library API started on PORT https://localhost:${PORT}`)
});

// Connect to db
mongoose.connect(URI, () => {
    console.log("Connected to db")
});


// Fetch Data from FE
// const test = () => {
//     fetch("http://localhost:5000/positions")
//       .then(result => result.json())
//       .then(data => console.log(data))
//   }