'use client'

import { useState, useEffect } from "react"
import { isEmpty } from "@/utils/utils"
import Image from "next/image"
import { videoAlbums } from "@/assets/imageLinks"
import fblogo from "@/public/logos/facebook.png"
import instalogo from "@/public/logos/instagram.png"
import classes from "./video-page.module.css"
import YTVideo from "../yt-video/yt-video.component"
import { MoonLoader } from "react-spinners"
import { notFound } from "next/navigation"

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };


const VideoPage = ({videoAlbum}) => {
    const [currAlbumInfo, setCurrAlbumInfo] = useState({})
    useEffect(() => {
        setCurrAlbumInfo(videoAlbums[videoAlbum])
    }, [videoAlbum])

    if(isEmpty(currAlbumInfo)){
        return(
        <div className={classes.video_page_wrapper_alt}>
            <MoonLoader
                    color="Grey"
                    loading
                    cssOverride={override}
                    size={70}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
        </div>
        )
    }
    else if(currAlbumInfo === undefined){
        notFound()
    }
    return(
        <>
            <div className={classes.video_page_wrapper}>
                <div className={classes.video_desc_wrapper}>
                    <div className={classes.video_desc}>
                        <div className={classes.video_desc_content}>
                            <h3>{currAlbumInfo.text}</h3>
                        </div>
                        <div className={classes.video_desc_content}>
                            <h5>Category</h5>
                            <h6>Videography</h6>
                        </div>
                        <div className={classes.video_desc_content}>
                            <h5>Social Links</h5>
                            <div className={classes.video_desc_link_container}>
                            <a href="https://www.facebook.com/profile.php?id=100084598611956"
                               target="_blank"
                            > 
                                <Image src={fblogo.src} alt="" width={30} height={30} />
                            </a>
                            <a href="https://www.instagram.com/dandd.productions/"
                               target="_blank"
                            > 
                                <Image src={instalogo.src} alt="" width={30} height={30} />
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={classes.video_placeholder}>
                    <YTVideo src={currAlbumInfo.link}/>
                </div>
            </div>
        </>
        
    )
}

export default VideoPage