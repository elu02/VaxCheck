import React from 'react'

export const Howto = () => {
    return (
        <div>
            <div className="howto-header">
                Instructions
                <ol className="howto-list">
                    <li>Take a picture of yourself using the capture button on the right</li>
                    <br/>
                    <li>Our machine learning algorithm will try to match you with the 
                        entries in our database
                    </li>
                    <br/>
                    <li>
                        If you have uploaded your proof of vaccination, our algorithm will
                        recognize this and verify you as vaccinated.
                    </li>
                </ol>
            </div>

        </div>
    )
}