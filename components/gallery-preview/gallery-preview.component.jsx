import classes from "./gallery-preview.module.css"
import Link from "next/link"
import Image from "next/image"


const GalleryPreview = ({logo, imageArray, type, description}) => {
    return(
        <>
            <div className={classes.gallery_preview_container}>
                <Link href={`${type}`}>
                    <Image src={logo} alt="" height={200} width={355} />
                </Link>
                <h1>{description}</h1>
                <div className={classes.gallery_preview_image_container}>
                    <Image src={imageArray[0]} className={classes.gallery_preview_image_container_img} alt="" height={400} width={267} quality={80} priority sizes="80vw" />
                    <Image src={imageArray[1]} className={classes.gallery_preview_image_container_img} alt="" height={400} width={600} quality={80} priority sizes="80vw"/>
                    <Image src={imageArray[2]} className={classes.gallery_preview_image_container_img} alt="" height={400} width={267} quality={80} priority sizes="80vw" />
                </div>
            </div>
        </>
    )
}

export default GalleryPreview;