import * as express from "express";
const router = express.Router();

import db from "../db";

//LH:3000/api/concepts
router.get("/", async (req, res) => {
    try {
        const concepts = await db.concepts.getAllConcepts();
        res.json(concepts);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//LH:3000/api/concepts/v=<id>
router.get("/v=:id", async(req, res) => {
    const id = req.params.id;
    try {
        const concepts = await db.concepts.getConceptsforVideoByID(id);
        res.json(concepts);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;