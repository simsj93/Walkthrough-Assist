import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import Youtube from "react-youtube";



const VideoPlayer = () => {

    const { videoid } = useParams();

    const [player, setPlayer] = useState({});
    const opts = {
        height: '780',
        width: '1280',
        playerVars: {
            autoplay: 0,
        },
    };

    const changeTime = (time) => {
        player.seekTo(time);
    }

    return (
        <>
            <h1>Testing React-Youtube</h1>
            <Youtube videoId={videoid} opts={opts} onReady={_onReady} />
            <button onClick={() => changeTime(60)}>Go to 1:00</button>
            <button onClick={() => changeTime(120)}>Go to 2:00</button>

        </>

    );

    function _onReady(event) {
        setPlayer(event.target);
    }
};

export default VideoPlayer;