import React from 'react';

const Features = ({image, title, subtitle}) => {
        return (
            <div className="Features">
                <img src={image} alt="Feature" className="Image"/>

                <div className="TextWrapper">

                <h3 className="Title">{title}</h3>
                <p className="Subtitle">{subtitle}</p>
            </div>
            </div>
        );
}

export default Features;