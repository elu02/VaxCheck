import React, { useState } from 'react';
import Webcam from 'react-webcam'

const videoConstraints = {
    width: 200, 
    height: 200,
    facingMode: 'user'
}

export const WebcamCapture = () => {

    const webcamRef = React.useRef(null);
    const [image, setImage] = useState('')
    const [done, setDone] = useState(false)

    const capture = React.useCallback(() => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc)
        },
        [webcamRef]
    );

    return(
        <div className="webcam-container">
            <div className="webcam-img">
                {
                    image == '' ? <Webcam audio={false} height={800} ref={webcamRef} screenshotFormat="image/jpeg"
                    width={800} videoConstraints={videoConstraints} /> : 
                    <img src={image} /> 
                }
            </div>
            
            <div className="capture-container">
                <button className="capture-button" onClick={ (e) => {
                    e.preventDefault();
                    capture();
                    setTimeout(() => {setDone(true)}, 3000)
                }}>
                    Capture Picture
                </button>
                <div>
                    {
                        image != '' ? <div className="results">
                            {
                                !done ? <div>processing...</div>
                                    : <div className="vaccinated">vaccinated!</div>
                            }
                        </div> : <div></div>
                    }
                </div>
            </div>

        </div>
    )
}
