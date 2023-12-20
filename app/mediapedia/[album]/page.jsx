import VideoPage from "@/components/video-page/video-page.component"

const MPAlbum = ({params}) => {
    return(
        <>
            <VideoPage videoAlbum={params.album}/>
        </>
    )
}

export default MPAlbum