import React from 'react';

const BlueBlock = ({children}) => {
    return (
        <div className="BlueBlock">
            {children}

            <button className="whiteButton">Learn More</button>

        </div>
    );

};

export default BlueBlock;
