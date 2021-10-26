import express from "express";
import Position from "../models/Position.js";
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const positions = await Position.find();
        res.json(positions);
    } catch (error) {
        res.json({message: error})
    }
});

router.get("/:positionId", async (req, res) => {
    try {
        const foundPosition = await Position.findById(req.params.positionId);
        res.json(foundPosition);
    } catch (error) {
        res.json({message: error})
    }
})

router.delete("/:positionId", async (req, res) => {
    try {
        const deletedPosition = await Position.deleteOne({ _id: req.params.positionId });
        res.json(deletedPosition);
    } catch (error) {
        res.json({message: error})
    }
})

router.post("/", async (req, res) => {
    const { description, title } = req.body;
    const position = new Position({
        description,
        title,
    });

    try {
        const savedPosition = await position.save();
        res.json(savedPosition) 
    } catch (error) {
        res.json({message: error})
    }
    
})

export default router;