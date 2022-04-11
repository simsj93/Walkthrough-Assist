import { Query } from "./query-helper";

const getAllConcepts = () => {
    return Query("SELECT * FROM concepts;");
}

const getConceptsforVideoByID = (id) => {
    return Query("SELECT c.name, c.explanation FROM videos v JOIN videos_to_concepts vc ON v.id = vc.video_id JOIN concepts c ON c.id = vc.concept_id WHERE v.id = ?", [id]);
}

export default {
    getAllConcepts,
    getConceptsforVideoByID
}