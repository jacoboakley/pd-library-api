import express from "express";
import Position from "../models/Position.js";
// Create
export const addPosition = async (req, res) => {
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
    
};
// Read
export const getAllPositions = async (req, res) => {
    try {
        const positions = await Position.find();
        res.json(positions);
    } catch (error) {
        res.json({message: error})
    }
};

export const getPositionById = async (req, res) => {
    try {
        const foundPosition = await Position.findById(req.params.positionId);
        res.json(foundPosition);
    } catch (error) {
        res.json({message: error})
    }
};
// Update
export const updatePositionById = async (req, res) => {
    try {
        const updatedPosition = await Position.updateOne(
            { _id: req.params.positionId },
            { $set: {
                title: req.body.title,
                description: req.body.description
            }}
        );
        res.json(updatedPosition);
    } catch (error) {
        res.json({message: error})
    }
};
// Delete
export const deletePositionById = async (req, res) => {
    try {
        const deletedPosition = await Position.deleteOne({ _id: req.params.positionId });
        res.json(deletedPosition);
    } catch (error) {
        res.json({message: error})
    }
};