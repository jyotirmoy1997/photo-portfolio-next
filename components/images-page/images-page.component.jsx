'use client'
import { useState, useEffect } from "react"
import fblogo from "@/assets/logos/facebook.png"
import instalogo from "@/assets/logos/instagram.png"
import { imageAlbums } from "@/assets/imageLinks.js"
import classes from "./images-page.module.css"
import Image from "next/image"
import { isEmpty } from "@/utils/utils"
import { Spinner } from "react-bootstrap"
import { notFound } from "next/navigation"

const imageStyle = {
    height: '100%',
    width : 'auto'
}

const ImagePage = ({imageAlbum}) => {
    const [currAlbumInfo, setCurrAlbumInfo] = useState({})
    useEffect(() => {
        setCurrAlbumInfo(imageAlbums[imageAlbum])
    }, [imageAlbum])

    if(isEmpty(currAlbumInfo)){
        return(
            <div className={classes.image_page_wrapper}>
                <Spinner animation="border" />
            </div>
        )
    }
    else if(currAlbumInfo === undefined){
        notFound()
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
                                <div className={classes.image_desc_link_container}>
                                    <Image src={fblogo.src} alt="" width={30} height={30} />
                                    <Image src={instalogo.src} alt="" width={30} height={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={classes.gallery_image_slider}>
                        {
                            currAlbumInfo.images.map((image, index) => {
                                return(
                                    <div key={index} className={classes.img_x}>
                                        <Image 
                                            className={classes.img_y} 
                                            src={image} 
                                            alt=""
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={imageStyle}
                                            priority
                                            quality={100}
                                             />
                                    </div>
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