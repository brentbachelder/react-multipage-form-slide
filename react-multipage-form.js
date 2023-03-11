import React from 'react'

export default function FormThing() {
    let currentPage = 0
    const componentWidth = 300  // This is in pixels, can change to anything else,
    const componentHeight = 500 // but need to change the 'getPosition' return
    const transitionSpeed = '.4s' // Set how fast the page transitions

    const frames = [
        // Frames can be components or div's
        <div style={{ backgroundColor: 'red', color: 'white', height: '100%' }}>Page 1</div>,
        <div style={{ backgroundColor: 'purple', color: 'white', height: '100%' }}>Page 2</div>,
        <div style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>Page 3</div>,
        <div style={{ backgroundColor: 'gray', color: 'black', height: '100%' }}>Page 4</div>,
    ]

    const nextPage = () => {
        if(currentPage + 1 < frames.length) currentPage++
        for(let i = 0; i < frames.length; i++) {
            const newLeft = getPosition(i)
            document.getElementById('frame-' + i).style.left = newLeft
        }
    }

    const previousPage = () => {
        if(currentPage - 1 >= 0) currentPage--
        for(let i = 0; i < frames.length; i++) {
            const newLeft = getPosition(i)
            document.getElementById('frame-' + i).style.left = newLeft
        }
    }

    function getPosition(index) {
        const value = (index - currentPage) * componentWidth
        return value.toString() + 'px'
    }
    
    return (
        <>
            { /* Outer Container */ }
            <div style={{ width: componentWidth, height: componentHeight, position: 'relative', borderRadius: '8px',
                        overflow: 'hidden', whiteSpace: 'nowrap', border: '1px solid gray' }}>
                
                { frames.map((frame, index) => {
                    // Inner Container
                    console.log(getPosition(index))
                    return <div key={ index } id={'frame-' + index} style={{ width: componentWidth, height: componentHeight, 
                                transition: 'left ' + transitionSpeed, position: 'absolute', top: '0', left: getPosition(index) }}>
                        { /* Render Content */ }
                        { frame }
                    
                    </div>
                })}
            </div>
            { /* Temporary buttons for going through the pages */ }
            <div style={{ width: componentWidth, display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={ previousPage }>Back</button>
                <button onClick={ nextPage }>Forward</button>
            </div>
        </>
    )
}
