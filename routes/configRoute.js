import express from "express";
import { validateUser, PerformingValidation } from "../middleWare/security.js";
import { } from "./othersRoute.js";


export default function configRoutes(app) {

    app.use(validateUser, PerformingValidation); // middleWare SECURITY

    router.get('/signup', ); //
    router.get('/verify', ); //

    app.use((req, res) => {
        res.status(404).json({ msg: 'Route not found' })
    })

}