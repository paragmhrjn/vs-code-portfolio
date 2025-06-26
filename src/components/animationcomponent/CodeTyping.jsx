import React, { useEffect, useState } from 'react';

const CodeTypewriter = () => {
        const developer = {
            name: "Parag Chandra Maharjan",
            role: "Frontend Engineer",
            skills: ["React", "TypeScript", "Tailwind CSS", "RESTAPI", "Javascript"],
            location: "Kiel, Germany",
            passions: ["UI/UX Design", "Performance Optimization", "Accessibility"],
            availability: "Open to new opportunities",
    };


    const codeString = JSON.stringify(developer, null, 2); // Better spacing
    const [displayedText, setDisplayedText] = useState('');
    const [typingDone, setTypingDone] = useState(false);

    useEffect(() => {
        const hasTyped = sessionStorage.getItem('typedCode');

        if (hasTyped) {
            setDisplayedText(codeString);
            setTypingDone(true);
            return;
        }

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < codeString.length) {
                setDisplayedText((prev) => prev + codeString[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval);
                sessionStorage.setItem('typedCode', 'true'); // Mark as typed
                setTypingDone(true);
            }
        }, 15);

        return () => clearInterval(interval);
    }, [codeString]);

    return (
        <div className="p-4 rounded-lg text-left shadow-lg w-full max-w-2xl mx-auto font-mono">
            <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre-wrap">
                {displayedText}
                <span className="animate-pulse">|</span>
            </pre>
        </div>
    );
};

export default CodeTypewriter;