import rootErrImg from "@/public/404_Page.png"
import albumErrImg from "@/public/404_album.png"
import Image from "next/image"
import classes from "./not-found.module.css"

const NotFound = ({type}) => {
    return(
        <div className={classes.not_found_img_container} >
            <Image src={type === "root" ? rootErrImg : albumErrImg} alt="error-page" style={{
                width : "100%",
                height : "auto"
            }} priority />
        </div>
    )
}

export default NotFound