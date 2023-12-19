import ImagesPage from "@/components/images-page/images-page.component"

const MPAlbum = ({params}) => {
    return(
        <ImagesPage imageAlbum={params.album} />
    )
}

export default MPAlbum