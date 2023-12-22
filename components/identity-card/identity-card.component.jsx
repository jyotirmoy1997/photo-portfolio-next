import IDAbout from "../id-about/id-about.component"
import classes from "./identity-card.module.css"
import Image from "next/image"

const imgStyles = {
    height : "100%",
    width : "100%"
}

const IdentityCard = ({imageURL, authName}) => {
    const TestString = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
    not only five centuries, but also the leap into electronic typesetting, remaining essentially
    unchanged. `
    return(
        <div className={classes.identity_card}>
            <div className={classes.identity_card_img_wrapper}>
                <Image src={imageURL} alt="" height={350} width={350} style={imgStyles} />
            </div>
            <IDAbout name={authName} aboutString={TestString} />
        </div>
    )
}

export default IdentityCard