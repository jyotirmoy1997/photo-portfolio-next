'use client'
import { useState, useEffect } from "react"
import { redirect } from 'next/navigation'
import classes from "./gallery-item.module.css"

const GalleryItem = ({logo, imageArray, segment}) => {
    const [currentAlbum, setCurrentAlbum] = useState('')

    useEffect(() => {
        if(currentAlbum !== '')
            redirect(`/${segment}/${currentAlbum}`, 'push')
    }, [currentAlbum])
    const toImages = (id) => {
        setCurrentAlbum(id)
    }
    return(
        <>
        <div className={classes.gallery_item_wrapper}>
            <img className={classes.gallery_thumb_logo} src={logo.src} alt="" />
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