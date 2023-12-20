'use client'

const YTVideo = ({src}) => {
    return(
        <iframe width="100%" height="100%" 
            src={src} 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
    )
}

export default YTVideo