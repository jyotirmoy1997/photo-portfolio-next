import ppLogo from "@/assets/logos/PixelPerfect.png"
import { PPThumbnails } from "@/assets/imageLinks"
import GalleryItem from "@/components/gallery-item/gallery-item.component"

export const metadata = {
    title: 'Pixel Perfect',
    description: 'You destination for portfolio shoots',
}

const PixelPerfect = () => {
    return(
        <>
            <GalleryItem logo={ppLogo} imageArray={PPThumbnails} segment="pixelperfect"/>
        </>
    )
        
}

export default PixelPerfect