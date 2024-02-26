import IDAbout from "../id-about/id-about.component"
import Image from "next/image"
import classes from "./identity-card.module.css"

const imgStyles = {
    height : "100%",
    width : "100%"
}

const IdentityCard = ({imageURL, authName, socialHandles, about}) => {
    return(
        <div className={classes.identity_card}>
            <div className={classes.identity_card_img_wrapper}>
                <Image 
                    src={imageURL} 
                    alt="" 
                    height={350} 
                    width={350} 
                    style={imgStyles} 
                    quality={100} 
                    priority 
                    sizes="100vw" />
            </div>
            <IDAbout name={authName} aboutString={about} socialHandles={socialHandles} />
        </div>
    )
}

export default IdentityCard