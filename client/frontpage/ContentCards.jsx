import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContentCards = () => {
  const [videos, setVideos] = useState([]);

//call back-end API endpoint to retreive info for all videos
  useEffect(() => {
    fetch("/api/videos")
    .then(res => res.json())
    .then(videos => { setVideos(videos)})
    .catch((error) => 
    {console.log(error);
    alert("Sorry, we could not load the video list!")
    })
  }, []);


  return (
    <>
      <div className="card-deck container">
        {videos.map((video) => {return (
        <>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-primary">{video.subject}</h4>
              <p>{video.description}</p>
              {/*The YouTube id for a video can be extracted from the URL linking to it
               by stripping off the prefix "https://www.youtube.com/watch?v="*/}
              <Link to={`videos/${video.url.slice(32)}`}>
                <button className="btn btn-primary">Play Video</button>
              </Link>
            </div>
          </div>
          </>)
        }
        )}
      </div>
    </>
  )
}

export default ContentCards;
