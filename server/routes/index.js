import * as express from "express";
import timestamps from "../db/timestamps";
const router = express.Router();
import videosRouter from "./videos";
import timestampsRouter from "./timestamps";
import conceptsRouter from "./concepts";

// localhost:3000/api/videos
router.use("/videos", videosRouter);

//localhost:3000/api/timestamps
router.use("/timestamps", timestampsRouter);

//localhost:3000/api/timestamps
router.use("/concepts", conceptsRouter);

export default router;