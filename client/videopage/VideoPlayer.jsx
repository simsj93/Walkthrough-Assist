import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom"
import Youtube from "react-youtube";



const VideoPlayer = (props) => {

    const { videoid } = useParams();

    const [player, setPlayer] = useState({});
    const [timestamps, setTimestamps] = useState([]);

    const location = useLocation();
    const {id} = location.state;

    const opts = {
        height: '780',
        width: '1280',
        playerVars: {
            autoplay: 0,
        },
    };

    useEffect(() => {
        fetch(`/api/timestamps/v=${id}`)
        .then(res => res.json())
        .then(timestamps => {
            setTimestamps(timestamps);
        })
        .catch(error => {
            console.log(error);
            alert("Sorry, we could not load timestamps for this video!");
        });
    }, []);

    const changeTime = (time) => {
        player.seekTo(time);
    }

    //helper function that takes a timestamp of the form "HH:MM:SS"
    //and returns the total number of seconds
    const timestampToSeconds = (time) => {
        const [hours, minutes, seconds] = time.split(":");
        let result = parseInt(hours)*3600 + parseInt(minutes)*60 + parseInt(seconds);
        return result;
    }

    return (
        <>
            <h1>Testing React-Youtube</h1>
            <Youtube videoId={videoid} opts={opts} onReady={_onReady} />
            <ul>
                {timestamps.map((timestamp) => {
                    return(
                    <li key={timestamp.id}>
                        <button className='btn btn-primary'
                        onClick={() => changeTime(timestampToSeconds(timestamp.start_time))}>
                            {`${timestamp.subject} : ${timestamp.start_time}`}
                        </button>
                    </li>)
                })}
            </ul>
        </>

    );

    function _onReady(event) {
        setPlayer(event.target);
    }
};

export default VideoPlayer;