import IDAbout from "../id-about/id-about.component"
import classes from "./identity-card.module.css"
import Image from "next/image"

const IdentityCard = ({imageURL, authName}) => {
    const TestString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    return(
        <div className={classes.identity_card}>
            <Image src={imageURL} alt="" width={350} height={350} />
            <IDAbout name={authName} aboutString={TestString} />
        </div>
    )
}

export default IdentityCard