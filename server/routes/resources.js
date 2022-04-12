import * as express from "express";
const router = express.Router();

import db from "../db";

//LH:3000/api/resources
router.get("/", async (req, res) => {
    try {
        const resources = await db.resources.getAllResources();
        res.json(resources);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//LH:3000/api/timestamps/v=<id>
router.get("/v=:id", async(req, res) => {
    const id = req.params.id;
    try {
        const resources = await db.resources.getResourcesforVideoByID(id);
        res.json(resources);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;