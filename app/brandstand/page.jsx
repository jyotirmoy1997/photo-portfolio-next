import bsLogo from "@/public/logos/TheBrandStand.png"
import { BSThumbnails } from "@/assets/imageLinks"
import GalleryItem from "@/components/gallery-item/gallery-item.component"

export const metadata = {
    title: 'The Brandstand',
    description: 'Visual Alchemy: We Transform Brands with Captivating Photography services',
}

const BrandStand = () => {
    return(
        <>
            <GalleryItem logo={bsLogo} imageArray={BSThumbnails} segment="brandstand"/>
        </>
    )
        
}

export default BrandStand