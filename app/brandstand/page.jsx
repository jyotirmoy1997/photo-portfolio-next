import bsLogo from "@/assets/logos/TheBrandstand.png"
import { BSThumbnails } from "@/assets/imageLinks"
import GalleryItem from "@/components/gallery-item/gallery-item.component"

const BrandStand = () => {
    return(
        <>
            <GalleryItem logo={bsLogo} imageArray={BSThumbnails} segment="brandstand"/>
        </>
    )
        
}

export default BrandStand