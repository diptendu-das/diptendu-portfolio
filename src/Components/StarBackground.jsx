import { useState, useEffect } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        const calculateStars = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const numberOfStars = Math.floor((height * width) / 6000);
            
            const paddingTopPx = 50; 
            const paddingPercent = (paddingTopPx / height) * 100;
            const newStars = [];

            for (let i = 0; i < numberOfStars; i++) {
                newStars.push({
                    id: i,
                    size: Math.random() * 3 + 1,
                    // keep x a bit away from 100% to avoid horizontal scrollbar from overflowing
                    x: Math.random() * 98,
                    y: Math.random() * (100 - paddingPercent) + paddingPercent,
                    opacity: Math.random() * 0.5 + 0.5,
                    animationDuration: Math.random() * 4 + 2,
                });
            }
            setStars(newStars);

            // Fewer meteors on small screens
            const numberOfMeteors = Math.max(1, Math.floor(width / 400));
            const newMeteors = [];

            for (let i = 0; i < numberOfMeteors; i++) {
                newMeteors.push({
                    id: i,
                    size: Math.random() * 3 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 20,
                    opacity: Math.random() * 0.5 + 0.5,
                    animationDuration: Math.random() * 4 + 2,
                });
            }
            setMeteors(newMeteors);
        };

        calculateStars();

        let timeout;
        const handleResize = () => {
            clearTimeout(timeout);
            timeout = setTimeout(calculateStars, 200);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden bg-starbackground z-[-10] pointer-events-none">
            {stars.map((star) => (
                <p 
                    className="star"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        top: star.y + "%",
                        left: star.x + "%",
                        animationDuration: star.animationDuration + "s",
                    }}
                    key={star.id}
                ></p>
            ))}
            {meteors.map((meteor) => (
                <p
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 40 + "px",
                        height: meteor.size * 0.8 + "px",
                        top: meteor.y + "%",
                        left: meteor.x + "%",
                        animationDuration: meteor.animationDuration + "s",
                    }}
                    key={meteor.id}
                ></p>
            ))}
        </div>
    );
};