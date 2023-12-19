'use client'
import { useState, useEffect } from "react"
import { redirect } from 'next/navigation'
import img from "@/assets/img.jpg"
import img2 from "@/assets/img2.jpg"
import img3 from "@/assets/img3.jpg"
import logo1 from "@/assets/logos/BibahoScapes.png"
import classes from "./gallery-item.module.css"

const thumbnails = [   
    {
        text : "Shruti and Saptarshi's Wedding",
        id : "shrutiandsaptarshi",
        category : "Wedding Photography",
        imgLink : img,
        un : 1 
    },
    {
        text : "Gouravmoy and Priyanka's Wedding",
        id : "gouravmoyandpriyanka",
        category : "Wedding Photography",
        imgLink : img2,
        un : 2
    },
    {
        text : "Jayati's Wedding",
        id : "jayati",
        category : "Wedding Photography",
        imgLink : img3,
        un : 3
    },
]

const GalleryItem = ({logo, imageArray}) => {
    const [currentAlbum, setCurrentAlbum] = useState('')

    useEffect(() => {
        if(currentAlbum !== '')
            redirect(`/bibahoscapes/${currentAlbum}`, 'push')
    }, [currentAlbum])
    const toImages = (id) => {
        setCurrentAlbum(id)
    }

    console.log(img)
    return(
        <>
        <div className={classes.gallery_item_wrapper}>
            <img className={classes.gallery_thumb_logo} src={logo1.src} alt="" />
            <div className={classes.image_container}>

                {
                    thumbnails.map((content) => {
                        return(
                        <div key={content.un} onClick={() => toImages(content.id)} className={classes.image_dummy} style={
                                {
                                backgroundImage: `url(${content.imgLink.src})`,
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