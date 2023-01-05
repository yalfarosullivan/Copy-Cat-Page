import GalleryItem from './GalleryItem'

function Gallery(props) {

    const songList = props.data.map((song, index) => {
        return (
            <GalleryItem item={song} key={index}/>
        )
    })

    return (
        <div>
            {songList}
        </div>
    )
}

export default Gallery
