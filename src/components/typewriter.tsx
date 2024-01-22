'use client'

import { useState, useEffect } from 'react'

enum direction {
    Forward,
    Backward
}

interface TypewriterProps {
    texts: string[],
    cursor: string,
    delay: number,
    pause: number,
    className?: string
}

const Typewriter = ({texts, cursor, delay, pause, className}: TypewriterProps) => {
    const [typingDirection, setTypingDirection] = useState(direction.Forward)
    const [isTyping, setIsTyping] = useState(true)
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [currentDisplay, setCurrentDisplay] = useState("")
    const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0)

    const cycleText = () => {
        setCurrentTextIndex((currentTextIndex + 1) % texts.length)
    }

    /**
     * Handles pausing the typewriter to allow the user to read the text. Handles what to
     * do next after the pause.
     * @param nextDirection The direction of typing to continue with
     * @param nextIndex The index in the text to resume typing from
     * @param pause The length of time to pause for.
     */
    const pauseTyping = (nextDirection: direction, nextIndex: number, pause: number) => {
        setCurrentDisplayIndex(nextIndex); 
        setTypingDirection(nextDirection)
        setIsTyping(false)
        setTimeout(() => setIsTyping(true), pause)
    }

    useEffect(() => {
        //  If we are at the start or end of the text, pause
        if (currentDisplayIndex > texts[currentTextIndex].length) {
            pauseTyping(direction.Backward, currentDisplayIndex - 1, pause);
            return
        }
        
        if (currentDisplayIndex < 0) {
            pauseTyping(direction.Forward, 0, delay)
            cycleText();
            return
        }
        
        // Otherwise, set the next text and index based on typing direction.
        const nextText = texts[currentTextIndex].slice(0, currentDisplayIndex)
        setCurrentDisplay(nextText)

        if (typingDirection === direction.Forward && isTyping) {
            setTimeout(() => setCurrentDisplayIndex(currentDisplayIndex + 1), delay)
        }

        if (typingDirection === direction.Backward && isTyping) {
            setTimeout(() => setCurrentDisplayIndex(nextText.lastIndexOf(' ')), delay*2)
        }
    }, [currentDisplayIndex, isTyping])

    return (
        <>
            <span className={className}>{currentDisplay}</span>
            <span className={`${className + (!isTyping ? ' animate-blink' : '')}`}>{cursor}</span>
        </>
    )
}

export default Typewriter