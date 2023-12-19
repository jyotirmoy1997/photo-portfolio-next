import ImagesPage from "@/components/images-page/images-page.component"

const PPAlbum = ({params}) => {
    return(
        <ImagesPage imageAlbum={params.album} />
    )
}

export default PPAlbum