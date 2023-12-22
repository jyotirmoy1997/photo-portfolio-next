import classes from "./id-about.module.css"
import Image from "next/image"
import fbLogo from "@/assets/logos/facebook.png"
import instaLogo from "@/assets/logos/instagram.png"

const IDAbout = ({name, aboutString, socialHandles}) => {
    return (
        <div className={classes.id_about}>
            <h2>{name}</h2>
            <p>{aboutString}</p>
            <div className={classes.id_about_logos}>
                <Image src={fbLogo.src} height={35} width={35} alt="fb-logo" />
                <Image src={instaLogo.src} height={35} width={35} alt="insta-logo" />
            </div>
        </div>
    )
}

export default IDAbout