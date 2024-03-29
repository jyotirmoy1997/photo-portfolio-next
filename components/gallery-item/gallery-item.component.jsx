'use client'
import { useState, useEffect } from "react"
import { redirect } from 'next/navigation'
import Image from "next/image"
import classes from "./gallery-item.module.css"


const imageStyle = {
    height: 'auto',
    width: '100%',
}

const GalleryItem = ({logo, imageArray, segment}) => {
    const [currentAlbum, setCurrentAlbum] = useState('')

    useEffect(() => {
        if(currentAlbum !== '')
            redirect(`/${segment}/${currentAlbum}`, 'push')
    }, [currentAlbum, segment])
    const toImages = (id) => {
        setCurrentAlbum(id)
    }
    return(
        <>
        <div className={classes.gallery_item_wrapper}>
            <div className={classes.gallery_thumb_logo}>
                <Image 
                    src={logo.src} alt="gallery-thumb-logo" 
                    height={7680}
                    width={4320}
                    style={imageStyle}
                    quality={100} 
                    priority 
                    sizes="100vw"
                />
            </div>
            <div className={classes.image_container}>

                {
                    imageArray.map((content) => {
                        return(
                        <div key={content.id} onClick={() => toImages(content.id)} className={classes.image_dummy} style={
                                {
                                backgroundImage: `url(${content.imgLink})`,
                                backgroundSize: 'cover'
                                }
                            }>
                            <div className={classes.img_text}>
                                {content.text}
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default GalleryItem