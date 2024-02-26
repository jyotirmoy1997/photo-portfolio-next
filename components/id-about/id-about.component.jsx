import Image from "next/image"
import classes from "./id-about.module.css"
import fbLogo from "@/public/logos/facebook.png"
import instaLogo from "@/public/logos/instagram.png"

const IDAbout = ({name, aboutString, socialHandles}) => {
    return (
        <div className={classes.id_about}>
            <h2>{name}</h2>
            <p>{aboutString}</p>
            <div className={classes.id_about_logos}>
                <a href={socialHandles.fb} target="_blank">
                    <Image src={fbLogo.src} height={35} width={35} alt="fb-logo" />
                </a>
                <a href={socialHandles.insta} target="_blank">
                    <Image src={instaLogo.src} height={35} width={35} alt="insta-logo" />
                </a>
            </div>
        </div>
    )
}

export default IDAbout