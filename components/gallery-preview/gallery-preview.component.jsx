import classes from "./gallery-preview.module.css"
import Link from "next/link"
import Image from "next/image"

const GalleryPreview = ({logo, imageArray, type}) => {
    return(
        <>
            <div className={classes.gallery_preview_container}>
                <Link href={`${type}`}>
                    <Image src={logo} alt="" height={200} width={355} />
                </Link>
                <div className={classes.gallery_preview_image_container}>
                    <Image src={imageArray[0]} alt="" height={400} width={267} />
                    <Image src={imageArray[1]} alt="" height={400} width={600}/>
                    <Image src={imageArray[2]} alt="" height={400} width={267}/>
                </div>
            </div>
        </>
    )
}

export default GalleryPreview;