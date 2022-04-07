import React from 'react';
import './App.css';
// App.jsx import { render } from '@testing-library/react';


const Vid = () => {
    return (
        <>

            <div>NAVBAR</div>
            <div container-fluid>
                <div className="player">
                    <iframe
                        width="853"
                        height="480"
                        src={"https://www.youtube.com/embed"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
                <div className='timestamp'></div>
                <div className='timestamp-box'>Content
                    fdjfhsdj dhfhf</div>
            </div>
        </>


    )
}




export default Vid;