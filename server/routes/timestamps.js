import * as express from "express";
const router = express.Router();

import db from "../db";

router.get("/", async (req, res) => {
    try {
        const timestamps = await db.timestamps.getAllTimestamps();
        res.json(timestamps);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get("/v=:id", async(req, res) => {
    const id = req.params.id;
    try {
        const timestamps = await db.timestamps.getTimeStampsforVideoByID(id);
        res.json(timestamps);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;