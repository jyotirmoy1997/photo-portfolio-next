import GalleryItem from "@/components/gallery-item/gallery-item.component"
import { BBSThumbnails } from "@/assets/imageLinks"
import bbsLogo from "@/public/logos/BibahoScapes.png"

export const metadata = {
    title: 'BibahoScapes',
    description: 'Capturing the Elegance of Your Love Story: Explore our Exquisite Wedding Photography Services',
}

const BBS = () => {
    return(
        <>
            <GalleryItem logo={bbsLogo} imageArray={BBSThumbnails} segment="bibahoscapes"/>
        </>
        
    )
        
}

export default BBS