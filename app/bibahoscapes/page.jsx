import GalleryItem from "@/components/gallery-item/gallery-item.component"
import bbsLogo from "@/assets/logos/BibahoScapes.png"
import { BBSThumbnails } from "@/assets/imageLinks"

export const metadata = {
    title: 'BibahoScapes',
    description: 'You destination for wedding pgotography',
}

const BBS = () => {
    return(
        <>
            <GalleryItem logo={bbsLogo} imageArray={BBSThumbnails} segment="bibahoscapes"/>
        </>
        
    )
        
}

export default BBS