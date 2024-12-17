import React, { useState } from "react";
import Star from "./Star"
import { useEffect } from "react";

const Space = () => {
    const [stars, setStars] = useState([]);

    const MAX_STARS = 150;
    const generateStar = () => {
        setStars((prevStars) => {
            if (prevStars.length < MAX_STARS) {
                const newStar = {
                    id: Date.now(),
                    position: {
                        x: Math.floor(Math.random() * window.innerWidth),
                        y: Math.floor(Math.random() * window.innerHeight),
                    },
                };
                return [...prevStars, newStar];
            }
            return prevStars;
        });
    };

    const destroyStarById = (id) => {
        setStars((prevStars) => prevStars.filter((star) => star.id !== id));
    };

    
    useEffect(() => {
        const interval = setInterval(() => {
            generateStar();
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space">
            {stars.map((star) => (
                <Star key={star.id} id={star.id} position={star.position} destroyStarById={destroyStarById}/>
            ))}
        </div>
    )
}

export default Space