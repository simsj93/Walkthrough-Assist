import * as express from "express";
const router = express.Router();

import db from "../db";

// // REST API

// LH:3000/api/videos/<id?>
router.get("/:id?", async (req, res) => {
    try {
        const id = req.params.id;
        if(id)
        {
            const video = await db.videos.getVideoByID(id);
            res.json(video);
        }
        else{
            const videos = await db.videos.getVideos();
            res.json(videos);
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


export default router;