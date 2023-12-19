'use client'
import { useState, useEffect } from "react"
import fblogo from "@/assets/logos/facebook.png"
import instalogo from "@/assets/logos/instagram.png"
import { imageAlbums } from "@/assets/imageLinks.js"
import classes from "./images-page.module.css"
import Image from "next/image"

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const ImagePage = ({imageAlbum}) => {
    const [currAlbumInfo, setCurrAlbumInfo] = useState({})
    useEffect(() => {
        setCurrAlbumInfo(imageAlbums[imageAlbum])
    }, [])

    if(isEmpty(currAlbumInfo)){
        return(
            <div>Loading...</div>
        )
    }
    
    else{
        return(
            <>  
                <div className={classes.image_page_wrapper}>
                    <div className={classes.image_desc_wrapper}>
                        <div className={classes.image_desc}>
                            <div className={classes.image_content}>
                                <h3>{currAlbumInfo.text}</h3>
                                <p>{currAlbumInfo.images.length} Photos</p>
                            </div>
                            <div className={classes.image_content}>
                                <h5>Category</h5>
                                <h6>{currAlbumInfo.category}</h6>
                            </div>
                            <div className={classes.image_content}>
                                <h5>Links</h5>
                                <div className={classes.image_desc_container_link}>
                                    <Image src={fblogo.src} alt="" width={30} height={30} />
                                    <Image src={instalogo.src} alt="" width={30} height={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={classes.gallery_image_slider}>
                        {
                            currAlbumInfo.images.map((image) => {
                                return(
                                    <div className={classes.img_x}><img src={image} alt="" srcset="" /></div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}


export default ImagePage