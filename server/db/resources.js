import { Query } from "./query-helper";

const getAllResources = () => {
    return Query("SELECT * FROM resources;");
}

const getResourcesforVideoByID = (id) => {
    return Query("SELECT r.url FROM videos v JOIN videos_to_resources vr ON v.id = vr.video_id JOIN resources r on vr.resource_id = r.id WHERE v.id = ?", [id]);
}

export default {
    getAllResources,
    getResourcesforVideoByID
}