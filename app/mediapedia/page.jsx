import GalleryItem from "@/components/gallery-item/gallery-item.component"
import { MPThumbnails } from "@/assets/imageLinks"
import mpLogo from "@/public/logos/MediaPedia.png"

export const metadata = {
    title: 'Media Pedia',
    description: 'Cinematic Brilliance: Our Signature Videography services Unleashes Your Story',
}


const MediaPedia = () => {
    return(
        <div>
            <GalleryItem logo={mpLogo} imageArray={MPThumbnails} segment="mediapedia" />
        </div>
    )
        
}

export default MediaPedia