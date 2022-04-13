import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom"
import Youtube from "react-youtube";
import Accordion from "../components/Accordion.jsx"
import Navbar from '../components/Navbar.jsx';



const VideoPlayer = (props) => {

    const { videoid } = useParams();

    const [player, setPlayer] = useState({});
    const [timestamps, setTimestamps] = useState([]);
    const [concepts, setConcepts] = useState([]);
    const [resources, setResources] = useState([]);

    const location = useLocation();
    const { id } = location.state;

    const opts = {
        height: '390',
        width: '640',
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

    useEffect(() => {
        fetch(`/api/concepts/v=${id}`)
            .then(res => res.json())
            .then(concepts => {
                setConcepts(concepts);
            })
            .catch(error => {
                console.log(error);
                alert("Error loading concepts.")
            })
    }, []);

    useEffect(() => {
        fetch(`/api/resources/v=${id}`)
            .then(res => res.json())
            .then(resources => {
                setResources(resources);
            })
            .catch(error => {
                console.log(error);
                alert("Error loading resources.")
            })
    }, []);

    const changeTime = (time) => {
        player.seekTo(time);
    }

    //helper function that takes a timestamp of the form "HH:MM:SS"
    //and returns the total number of seconds
    const timestampToSeconds = (time) => {
        const [hours, minutes, seconds] = time.split(":");
        let result = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
        return result;
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="YTdiv">
                            <Youtube videoId={videoid} opts={opts} onReady={_onReady} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="TSdiv d-inline-flex">
                            <div id="scrollbox" className="card example-1 scrollbar-ripe-malinka d-flex">
                                <div className="card-body">
                                    {timestamps.map((timestamp) => {
                                        return (
                                            <>
                                                <div className="col-lg-5 text-center d-flex align-items-stretch" key={timestamp.id}>
                                                    <button className='TSBtn my-1'
                                                        onClick={() => changeTime(timestampToSeconds(timestamp.start_time))}>
                                                        {`${timestamp.subject} : ${timestamp.start_time}`}
                                                    </button>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="AccDiv mt-3">
                    <Accordion conceptList={concepts} resourceList={resources} />
                </div>
            </div>

        </>

    );

    function _onReady(event) {
        setPlayer(event.target);
    }
};

export default VideoPlayer;