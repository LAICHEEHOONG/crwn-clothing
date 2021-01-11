import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ TITLE, IMAGEURL, SIZE }) => {
    return (
        <div className={`menu-item ${SIZE}`}>

            <div className='background-image'
                style={{
                    backgroundImage: `url(${IMAGEURL})`
                }}
            ></div>

            <div className='content'>
                <h1 className='title'>{TITLE.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;