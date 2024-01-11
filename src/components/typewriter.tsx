'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
    text: string,
    cursor: string,
    delay: number,
    pause: number,
    doneCallback: () => void
}

const Typewriter = ({text, cursor, delay, pause, doneCallback}: TypewriterProps) => {
    const [currentText, setCurrentText] = useState(text)
    const [currentIndex, setCurrentIndex] = useState(0)
    const doneTyping = () => currentIndex > text.length

    useEffect(() => {
        if (doneTyping()) {
            setTimeout(() => {setCurrentIndex(0); doneCallback()}, pause)
            return
        }

        setCurrentText(text.slice(0, currentIndex))
        setTimeout(() => setCurrentIndex(currentIndex + 1), delay)
    })

    return (
        <>
            <br />
            <span className='font-mono'>{currentText}</span>
            <span className={`${doneTyping() ? 'animate-blink' : ''}`}>{cursor}</span>
        </>
    )
}

export default Typewriter