import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const texts = ['Web Frontend', 'Web Backend'];

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[loopNum % texts.length];
            const updatedText = isDeleting
                ? currentText.substring(0, text.length - 1)
                : currentText.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === currentText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, texts]);

    return (
        <div className='ml-4'>
            <span className="text-lg font-mono text-green-500">{text}</span>
            <span className="typing-cursor">|</span>
        </div>
    );
};

export default TypingAnimation;
