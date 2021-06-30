import React from 'react';
import "./LoadingIcon.scss";

const LoadingIcon = () => {
    return (
        <div className="hope-loading-icon">
            <div className="loading-icon">
                <div className="dots-container">
                    <div className="dot dot-1"></div>
                    <div className="dot dot-2"></div>
                    <div className="dot dot-3"></div>
                </div>
                <div className="text">Please wait...</div>
            </div>
        </div>
    );
};

export default LoadingIcon;