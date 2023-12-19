import GalleryPreview from "@/components/gallery-preview/gallery-preview.component"
import { galleryPreviewImages } from "@/assets/imageLinks"
import classes from "./page.module.css"


const Gallery = () => {
    return(
        <div className={classes.gallery_wrapper}>
            <div className={classes.gallery_wrapper_inner}>
                {
                    galleryPreviewImages.map((content) => {
                        return(
                            <div key={content.id}>
                                <GalleryPreview 
                                    logo={content.logo} 
                                    imageArray={content.images}
                                    type={content.type}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery