import ImagesPage from "@/components/images-page/images-page.component"

const BBSAlbum = ({params}) => {
    return(
        <ImagesPage imageAlbum={params.album} />
    )
}

export default BBSAlbum