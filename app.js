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
app.use(express.static("web"));

// Router
app.use('/positions', positionsRoutes);

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