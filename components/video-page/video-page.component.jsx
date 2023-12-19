import fblogo from "../../assets/logos/facebook.png"
import instalogo from "../../assets/logos/instagram.png"
import classes from "./video-page.module.css"
import YTVideo from "../yt-video/yt-video.component"

const VideoPage = () => {
    return(
        <>
            <div className={classes.video_page_wrapper}>
                <div className={classes.video_desc_wrapper}>
                    <div className={classes.video_desc}>
                        <div className={classes.video_desc_content}>
                            <h3>TAPA TINI</h3>
                        </div>
                        <div className={classes.video_desc_content}>
                            <h5>Category</h5>
                            <h6>Videography</h6>
                        </div>
                        <div className={classes.video_desc_content}>
                            <h5>Links</h5>
                            <div className={classes.video_desc_link_container}>
                                <img src={fblogo.src} alt="" width={30} height={30} />
                                <img src={instalogo.src} alt="" width={30} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={classes.video_placeholder}>
                
                    <YTVideo/>
                </div>
            </div>
        </>
        
    )
}

export default VideoPage