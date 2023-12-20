import GalleryItem from "@/components/gallery-item/gallery-item.component"
import { MPThumbnails } from "@/assets/imageLinks"
import mpLogo from "@/assets/logos/MediaPedia.png"

const MediaPedia = () => {
    return(
        <div>
            <GalleryItem logo={mpLogo} imageArray={MPThumbnails} segment="mediapedia" />
        </div>
    )
        
}

export default MediaPedia