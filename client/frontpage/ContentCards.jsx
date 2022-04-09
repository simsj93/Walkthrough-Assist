import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContentCards = () => {
  const [videos, setVideos] = useState([]);

  //call back-end API endpoint to retreive info for all videos
  useEffect(() => {
    fetch("/api/videos")
      .then(res => res.json())
      .then(videos => { setVideos(videos) })
      .catch((error) => {
        console.log(error);
        alert("Sorry, we could not load the video list!")
      })
  }, []);


  return (
    <>
      <div className="selection">
        <div className="container mx-auto mt-4">
          {videos.map((video) => {
            return (
              <>
                <div className="row">
                  <div className="col-md-4 text-center d-flex align-items-stretch">
                    <div className="card">
                      <img src="data:image/png;base64,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"
                        className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{video.subject}</h5>
                        <p className="card-text">{video.description}</p>
                      </div>
                      <Link to={`videos/${video.url.slice(32)}`}>
                        <div className="row mb-3 justify-content-center" id="watch-video">
                          <a href="#" className="btn mr-2"><i className="fas fa-link"></i>Watch Video</a>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </>)
          }
          )}
        </div>
      </div>
    </>
  )
}

export default ContentCards;
