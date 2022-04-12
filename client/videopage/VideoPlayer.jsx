import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom"
import Youtube from "react-youtube";
import Accordion from "../components/Accordion.jsx"
import Navbar from '../components/Navbar.jsx';



const VideoPlayer = () => {

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

    const timestampToSeconds = (time) => {
        const [hours, minutes, seconds] = time.split(":");
        let result = parseInt(hours)*3600 + parseInt(minutes)*60 + parseInt(seconds);
        return result;
    }

    return (
        <>
           <Navbar />
            <Youtube videoId={videoid} opts={opts} onReady={_onReady} />
            {timestamps.map((timestamp) => {
                    return(
                    <p key={timestamp.id}>
                        <button className='btn btn-primary'
                        onClick={() => changeTime(timestampToSeconds(timestamp.start_time))}>
                            {`${timestamp.subject} : ${timestamp.start_time}`}
                        </button>
                    </p>)
                })}
            <Accordion>lorem IEa6PjhKewJ2C3vQyWuzPTIssFs3PkeNfLwTBLtnQM9hxsAxnstes8xc4EX7AH9twp</Accordion>
        </>

    );

    function _onReady(event) {
        setPlayer(event.target);
    }
};

export default VideoPlayer;