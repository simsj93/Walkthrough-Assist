CREATE DATABASE IF NOT EXISTS walkthrough_assist CHARSET="utf8";

USE walkthrough_assist;

DROP TABLE IF EXISTS videos;
CREATE TABLE videos (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    subject VARCHAR(100),
    description TEXT,
    url TEXT
);

DROP TABLE IF EXISTS timestamps;
CREATE TABLE timestamps (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    video_id INT NOT NULL,
    start_time TIME,
    end_time TIME,
    CONSTRAINT fk_videoid FOREIGN KEY (video_id)
    REFERENCES videos(id)
);

DROP TABLE IF EXISTS concepts;
CREATE TABLE concepts (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(100),
    explanation TEXT
);

DROP TABLE IF EXISTS videos_to_concepts;
CREATE TABLE videos_to_concepts (
	concept_id INT NOT NULL,
    video_id INT NOT NULL,
    PRIMARY KEY (concept_id, video_id),
    CONSTRAINT fk_vc_videoid FOREIGN KEY (video_id) REFERENCES videos(id),
    CONSTRAINT fk_vc_conceptid FOREIGN KEY (concept_id) REFERENCES concepts(id)
);

DROP TABLE IF EXISTS resources;
CREATE TABLE resources (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(100),
    url TEXT
);

DROP TABLE IF EXISTS concepts_to_resources;
CREATE TABLE concepts_to_resources (
	concept_id INT NOT NULL,
    resource_id INT NOT NULL,
    PRIMARY KEY (concept_id, resource_id),
    CONSTRAINT fk_cr_conceptid FOREIGN KEY (concept_id) REFERENCES concepts(id),
    CONSTRAINT fk_cr_resourceid FOREIGN KEY (resource_id) REFERENCES resources(id)
);