import React from 'react'

function Image({className, alt, src, height , width, style}) {
    return (
        <img className={className} alt={alt} src={src} height={height} width={width} style={style}></img>
    )
}

export { Image }