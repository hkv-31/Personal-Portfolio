import React from 'react';

const Polaroid = ({ children, className = '', rotate = 'rotate-0' }) => {
    return (
        <div className={`polaroid inline-block ${rotate} ${className}`}>
            {children}
        </div>
    );
};

export default Polaroid;
