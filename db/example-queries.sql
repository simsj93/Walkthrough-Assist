/* Return a list of 
Add WHERE videos.subject = <VIDEO_TITLE> to display only the timestamps for that video
*/
SELECT videos.subject, timestamps.subject, timestamps.start_time
FROM videos JOIN timestamps ON videos.id = timestamps.video_id;

/* Return a list of concepts with the URLs to their related resources */
SELECT c.name, r.url FROM concepts c
JOIN concepts_to_resources cr ON c.id = cr.concept_id
JOIN resources r ON cr.resource_id = r.id;