import classes from "./gallery-preview.module.css"
import Link from "next/link"

const GalleryPreview = ({logo, imageArray, type}) => {
    return(
        <>
            <div className={classes.gallery_preview_container}>
                <Link href={`${type}`}>
                    <img src={logo} alt="" height={200} width={355} />
                </Link>
                <div className={classes.gallery_preview_image_container}>
                    <img src={imageArray[0]} alt="" height={400} width={267} />
                    <img src={imageArray[1]} alt="" height={400} width={600}/>
                    <img src={imageArray[2]} alt="" height={400} width={267}/>
                </div>
            </div>
        </>
    )
}

export default GalleryPreview;