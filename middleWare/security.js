import bcrypt from "bcrypt";
import express from "express";

export async function validateUser(req, res, next) {
    if (!req.body.user_name || !req.body.password) {
        return res.status(400).json({ error: "Username and password must be provided" });
    }
    next();
}

export async function PerformingValidation(req, res, next) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 25);
        req.body.password = hashedPassword;
        next();
    } catch (error) {
        console.error("Error Performing Validation:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}