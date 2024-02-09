import GalleryItem from "@/components/gallery-item/gallery-item.component"
import bbsLogo from "@/public/logos/BibahoScapes.png"
import { BBSThumbnails } from "@/assets/imageLinks"

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