import ImagesPage from "@/components/images-page/images-page.component"

const BBSAlbum = ({params}) => {
    return(
        <div>
            <ImagesPage imageAlbum={params.album} />
        </div>
    )
}

export default BBSAlbum