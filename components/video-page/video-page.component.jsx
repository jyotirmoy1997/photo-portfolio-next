'use client'
import { useState, useEffect } from "react"
import fblogo from "../../assets/logos/facebook.png"
import instalogo from "../../assets/logos/instagram.png"
import classes from "./video-page.module.css"
import YTVideo from "../yt-video/yt-video.component"
import { videoAlbums } from "@/assets/imageLinks"
import { isEmpty } from "@/utils/utils"
import Image from "next/image"
import { MoonLoader } from "react-spinners"

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
        <div className={classes.video_page_wrapper}>
            <MoonLoader
                    color="Grey"
                    loading
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
        </div>
        )
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
                            <h5>Links</h5>
                            <div className={classes.video_desc_link_container}>
                                <Image src={fblogo.src} alt="" width={30} height={30} />
                                <Image src={instalogo.src} alt="" width={30} height={30} />
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