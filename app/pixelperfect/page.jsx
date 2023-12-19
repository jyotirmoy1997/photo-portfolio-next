import ppLogo from "@/assets/logos/PixelPerfect.png"
import { PPThumbnails } from "@/assets/imageLinks"
import GalleryItem from "@/components/gallery-item/gallery-item.component"

const PixelPerfect = () => {
    return(
        <>
            <GalleryItem logo={ppLogo} imageArray={PPThumbnails}/>
        </>
    )
        
}

export default PixelPerfect