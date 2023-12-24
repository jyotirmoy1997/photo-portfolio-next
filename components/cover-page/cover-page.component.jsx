import classes from "./cover-page.module.css"
import { coverLink } from "@/assets/imageLinks"
import Image from "next/image"

const CoverPage = () => {
    return(
        <div className={classes.cover_page}>
            <Image 
                className={classes.cover_page_img} 
                src={coverLink} alt="cover-page"
                width={7087}
                height={2362}
                quality={100} 
                priority 
                sizes="100vw"
            />
        </div>
    )
}

export default CoverPage