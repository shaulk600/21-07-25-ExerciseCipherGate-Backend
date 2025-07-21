
import express from "express";
import { getLoginDetailsS } from "../services/securityService.js";

export async function getLoginDetailsC(req, res) {
    try {
        const { user_name, password } = req.body;
        if (!user_name || !password) {
            return res.status(400).json({ error: "Username and password most be provide" });
        }

        //אישור הרשאה - שליחה אל DB
        const { error, userApproved } = await getLoginDetailsS(user_name, password);
        if (error) {
            console.log({ error });
            return res.status(401).json({ error: "Invalid username or password" });
        }

        if (userApproved) {
            res.status(200).json({ message: "Access has been approved" });
        }
        else if (userApproved == false) {
            res.status(403).json({ message: "Access denied" });
        }

    } catch (error) {
        console.error("Error in getLoginDetails:", error);
        res.status(500).json({ error: "Internal server error" });
    }


}
// try {
//     const { user_name, password } = req.body;
//     if (!password || !user_name) {
//         return res.status(400).json({ error: "Password is nust be" });
//     }