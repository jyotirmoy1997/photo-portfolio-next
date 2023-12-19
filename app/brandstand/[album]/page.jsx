import ImagesPage from "@/components/images-page/images-page.component"

const BSAlbum = ({params}) => {
    return(
        <div>
            <ImagesPage imageAlbum={params.album} />
        </div>
        
    )
}

export default BSAlbum