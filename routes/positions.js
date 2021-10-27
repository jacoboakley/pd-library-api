import express from "express";
import {
    addPosition,
    deletePositionById,
    getAllPositions,
    getPositionById,
    updatePositionById
} from "../controllers/positions.js";
const router = express.Router();

// Create
router.post("/", addPosition);
// Read
router.get("/", getAllPositions);
router.get("/:positionId", getPositionById);
// Update
router.patch("/:positionId", updatePositionById);
// Delete
router.delete("/:positionId", deletePositionById);

export default router;