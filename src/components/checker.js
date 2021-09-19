import React from 'react'
import { WebcamCapture } from './webcam.js'
import { Howto } from './howto.js'

const Checker = () => {
    return (
        <div className="checker-container">
            <div className="how-to">
                <Howto />
            </div>
            <div className="picture">
                <WebcamCapture />
            </div>
        </div>
    );
}

export default Checker
