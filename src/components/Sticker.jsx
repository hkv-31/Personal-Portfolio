import React from 'react';

const Sticker = ({ children, top, left, right, bottom, rotate = 'rotate-0', className = '' }) => {
    const style = {
        top, left, right, bottom
    };

    return (
        <div
            className={`sticker ${rotate} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default Sticker;
