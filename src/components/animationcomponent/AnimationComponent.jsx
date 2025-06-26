import { useState, useEffect} from "react";

// Animation components (simplified framer-motion-like behavior)
const motion = {
    div: ({ children, initial, animate, transition, className, ...props }) => {
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const timer = setTimeout(() => setIsVisible(true), 100);
            return () => clearTimeout(timer);
        }, []);

        const style = {
            opacity: isVisible ? (animate?.opacity || 1) : (initial?.opacity || 0),
            transform: `translateY(${isVisible ? (animate?.y || 0) : (initial?.y || 20)}px)`,
            transition: `all ${transition?.duration || 0.5}s ease-out`,
        };

        return (
            <div className={className} style={style} {...props}>
                {children}
            </div>
        );
    }
};

export default motion;