import { Like } from '../../components'
import { songs } from '../../data/songs'


let listSongs = songs.map(song =>
    <div key={song.id} className="songDiv">
        <img
            className="cover"
            src={song.imageUrl}
            alt={song.title + " cover photo"}
            style={{
                width: song.imageSize,
                height: song.imageSize,
            }}
        />
        <h2>{song.title}</h2>
        <p>{song.date}</p>
        <Like />

    </div>
);


const ListSongs = () => {

    return (
        <div className="songsDiv">
            {listSongs}
        </div>
    )
}

export default ListSongs
