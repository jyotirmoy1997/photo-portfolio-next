import { PPThumbnails } from "@/assets/imageLinks"
import GalleryItem from "@/components/gallery-item/gallery-item.component"
import ppLogo from "@/public/logos/PixelPerfect.png"

export const metadata = {
    title: 'Pixel Perfect',
    description: 'Unveil Your Essence: Explore our Snap and Shine Portfolio Magic services',
}

const PixelPerfect = () => {
    return(
        <>
            <GalleryItem logo={ppLogo} imageArray={PPThumbnails} segment="pixelperfect"/>
        </>
    )
        
}

export default PixelPerfect