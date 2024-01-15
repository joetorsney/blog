'use client'

import { useState, useEffect } from 'react'

enum direction {
    Forward,
    Backward
}

interface TypewriterProps {
    text: string,
    cursor: string,
    delay: number,
    pause: number,
    doneCallback: () => void,
    className?: string
}

const Typewriter = ({text, cursor, delay, pause, doneCallback, className}: TypewriterProps) => {
    const [typingDirection, setTypingDirection] = useState(direction.Forward)
    const [isTyping, setIsTyping] = useState(true)
    const [currentText, setCurrentText] = useState(text)
    const [currentIndex, setCurrentIndex] = useState(0)

    /**
     * Handles pausing the typewriter to allow the user to read the text. Handles what to
     * do next after the pause.
     * @param nextDirection The direction of typing to continue with
     * @param nextIndex The index in the text to resume typing from
     * @param pause The length of time to pause for.
     */
    const pauseTyping = (nextDirection: direction, nextIndex: number, pause: number) => {
        setCurrentIndex(nextIndex); 
        setTypingDirection(nextDirection)
        setIsTyping(false)
        setTimeout(() => setIsTyping(true), pause)
    }

    useEffect(() => {
        //  If we are at the start or end of the text, pause
        if (currentIndex > text.length) {
            pauseTyping(direction.Backward, currentIndex - 1, pause);
            return
        }
        
        if (currentIndex < 0) {
            pauseTyping(direction.Forward, 0, delay)
            doneCallback();
            return
        }
        
        // Otherwise, set the next text and index based on typing direction.
        const nextText = text.slice(0, currentIndex)
        setCurrentText(nextText)

        if (typingDirection === direction.Forward && isTyping) {
            setTimeout(() => setCurrentIndex(currentIndex + 1), delay)
        }

        if (typingDirection === direction.Backward && isTyping) {
            setTimeout(() => setCurrentIndex(nextText.lastIndexOf(' ')), delay*2)
        }
    }, [currentIndex, isTyping])

    return (
        <>
            <span className={className}>{currentText}</span>
            <span className={`${className + (!isTyping ? ' animate-blink' : '')}`}>{cursor}</span>
        </>
    )
}

export default Typewriter