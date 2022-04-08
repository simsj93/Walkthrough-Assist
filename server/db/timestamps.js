import { Query } from "./index";

const getAllTimestamps = () => {
    return Query("SELECT * FROM timestamps;");
}

const getTimeStampsforVideoByID = (id) => {
    return Query("SELECT timestamps.subject, timestamps.start_time FROM timestamps JOIN videos ON timestamps.video_id = videos.id WHERE timestamps.video_id = ?", [id]);
}

export default {
    getAllTimestamps,
    getTimeStampsforVideoByID
}