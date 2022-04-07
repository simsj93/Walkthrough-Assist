/* Return a list of videos with each of their related timestamps and their topic
Add WHERE videos.subject = <VIDEO_TITLE> to display only the timestamps for that video
*/
SELECT videos.subject AS Video_Title, timestamps.subject AS Topic, timestamps.start_time AS Time
FROM videos JOIN timestamps ON videos.id = timestamps.video_id;

/* Return a list of concepts with the URLs to their related resources */
SELECT c.name AS Concept, r.url AS Resource_URL FROM concepts c
JOIN concepts_to_resources cr ON c.id = cr.concept_id
JOIN resources r ON cr.resource_id = r.id;

/* Return a list of concepts and the video they are covered in */
SELECT c.name AS Concept, v.subject AS Video
FROM concepts c JOIN videos_to_concepts vc ON c.id = vc.concept_id JOIN videos v on vc.video_id = v.id;