import * as express from "express";
import timestamps from "../db/timestamps";
const router = express.Router();
import videosRouter from "./videos";
import timestampsRouter from "./timestamps";

// import chirpsRouter from "./chirps";



// localhost:3000/api/videos
router.use("/videos", videosRouter);

//localhost:3000/api/timestamps
router.use("/timestamps", timestampsRouter);

export default router;