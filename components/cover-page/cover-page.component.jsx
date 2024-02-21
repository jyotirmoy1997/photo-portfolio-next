import classes from "./cover-page.module.css"
import { coverLink } from "@/assets/imageLinks"
import Image from "next/image"
import coverPage from "@/public/cover_page.png"

const CoverPage = () => {
    return(
        <div className={classes.cover_page}>
            <div className={classes.cover_page_img_wrapper} >
                <Image src={coverPage} alt="cover-page" style={{
                    width : "100%",
                    height : "auto"
                }}
                priority />
            </div>
        </div>
    )
}

export default CoverPage