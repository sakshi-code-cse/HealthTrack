import React, { useEffect } from 'react';
import '../Loading/loading.css';
import healthTrackLogo_a from "../../assets/Logo-c.png";
import githubLogo from "../../assets/github-logo.png"; // Add the GitHub logo asset

const LoadingScreen = ({ onLoadingComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoadingComplete();
        }, 3000); 

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <div className="loading-screen">
            <div className="loading-content">
                <img src={healthTrackLogo_a} alt="HealthTrack Logo" className="logo" />
                <div className="loading-ring"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;