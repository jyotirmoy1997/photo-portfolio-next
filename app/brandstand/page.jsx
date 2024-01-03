import bsLogo from "@/public/logos/TheBrandstand.png"
import { BSThumbnails } from "@/assets/imageLinks"
import GalleryItem from "@/components/gallery-item/gallery-item.component"

export const metadata = {
    title: 'The Brandstand',
    description: 'You destination for brand photography',
}

const BrandStand = () => {
    return(
        <>
            <GalleryItem logo={bsLogo} imageArray={BSThumbnails} segment="brandstand"/>
        </>
    )
        
}

export default BrandStand