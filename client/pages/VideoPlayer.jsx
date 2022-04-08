import React, { useState, useEffect } from 'react';
import Youtube from "react-youtube";

const VideoPlayer = () => {

  const [player, setPlayer] = useState({});
  const opts = {
    height: '780',
    width: '1280',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const changeTime = (time) => {
    player.seekTo(time);
  }

  return (
    <>
      <h1>Testing React-Youtube</h1>
      <Youtube videoId="kaImho5JioI" opts={opts} onReady={_onReady} />
      <button onClick={() => changeTime(300)}>Go to 5:00</button>
      <button onClick={() => changeTime(600)}>Go to 10:00</button>

    </>

  );

  function _onReady(event) {
    // access to player in all event handlers via event.target
    setPlayer(event.target);
  }
};

export default VideoPlayer;

