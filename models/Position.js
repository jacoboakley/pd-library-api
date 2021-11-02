import mongoose from "mongoose";

const PositionSchema = mongoose.Schema({
    description: { type: String,  required: true },
    industry: { type: String, required: true },
    pay: String,
    level: { type: String, required: true },
    skills: [{ type: String, required: true }],
    tags: [{ type: String, required: true }],
    title: { type: String, required: true },
    updated: { type: Date, default: Date.now, }
})

export default mongoose.model("Positions", PositionSchema);