import YouTube from 'react-youtube';
import React, { useEffect, useState } from 'react';

type PlayerProps = {
    ID: string
}

const VideoPlayer: React.FC<PlayerProps> = ({ ID }) => {
    const [dimensions, setDimensions] = useState({ width: '100%', height: 'auto' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const width = String(document.getElementById('player')?.offsetWidth || '100%')
            const height = String(Number(width) * 9 / 16);
            setDimensions({ width, height });
        };

        window.addEventListener('resize', handleResize);

        // Initial resize
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const opts = {
        playerVars: {
            autoplay: 0,
        },
        ...dimensions
    };

    const handleVideoReady = (event: any) => {
        setLoading(false);
    }

    return (
        <div id="player" className="w-full relative" style={{ paddingBottom: '56.25%', height: 0 }}>
            {loading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="spinner ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                </div>
            )}<YouTube
                videoId={ID}
                className="absolute top-0 left-0 w-full h-full"
                opts={opts}
                onReady={(event) => event.target.pauseVideo()}
            />
        </div>
    );
};

export default VideoPlayer;
