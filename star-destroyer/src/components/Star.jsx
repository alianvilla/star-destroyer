import React, {useState, useEffect, useRef}from 'react'

import './Star.css'

const Star = ({id, position, destroyStarById}) => {
    const starRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (isFocused) {
            starRef.current.focus();
        }
    }, []);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    
    return (
        <div 
        className="star" 
        style={{left: position.x, 
                top: position.y,
                cursor: 'pointer'
                }} 
        onClick={() => destroyStarById(id)}
        ref={starRef}
        tabIndex="0"
        onFocus={handleFocus}
        onBlur={handleBlur}
        >
            ⭐️
        </div>
    )
}



export default Star