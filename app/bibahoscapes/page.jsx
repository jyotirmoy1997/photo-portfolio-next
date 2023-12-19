import GalleryItem from "@/components/gallery-item/gallery-item.component"
import bbsLogo from "@/assets/logos/BibahoScapes.png"
import { BBSThumbnails } from "@/assets/imageLinks"

const BBS = () => {
    return(
        <>
            <GalleryItem logo={bbsLogo} imageArray={BBSThumbnails}/>
        </>
        
    )
        
}

export default BBS