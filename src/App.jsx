import { useState } from 'react'
import './App.css'
import { Like } from './Like'
import { ArtistInfo } from './ArtistInfo'

function App() {
  const songs = [
    { title: 'Believer', id: 1, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg', imageSize: 200, date: "2017", liked: false },
    { title: 'Radioactive', id: 2, imageUrl: 'https://i1.sndcdn.com/artworks-000058618127-o9ql4a-t500x500.jpg', imageSize: 200, date: "2012", liked: true },
    { title: 'Enemy', id: 3, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0cd265130636097.61842df318d10.jpg', imageSize: 200, date: "2021", liked: false },
    { title: 'Demons', id: 4, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Imagine_Dragons_-_%22Demons%22_%28Official_Single_Cover%29.jpg', imageSize: 200, date: "2012", liked: false },
    { title: 'Symphony', id: 5, imageUrl: 'https://i.scdn.co/image/ab67616d00001e02615c5525475415c56dadc6ef', imageSize: 200, date: "2022", liked: false },
    { title: 'Battle Cry', id: 6, imageUrl: 'https://i.ytimg.com/vi/ZgB2qItM76g/maxresdefault.jpg', imageSize: 200, date: "2015", liked: false },
    { title: 'Thunder', id: 7, imageUrl: 'https://i1.sndcdn.com/artworks-000635076223-98cavr-t500x500.jpg', imageSize: 200, date: "2017", liked: false },
    { title: 'Bad Liar', id: 8, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Imagine_Dragons_Bad_Liar.jpg/220px-Imagine_Dragons_Bad_Liar.jpg', imageSize: 200, date: "2018", liked: false },

  ];

  const [myList, setMyList] = useState(songs);
  const [inputText, setInputText] = useState('')
  const [submitValue, setSubmitValue] = useState('')

  const handleInput = (e) => {
    setInputText(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitValue(inputText)
  }

  function changeState(songID) {
    const myNextList = [...myList];
    const artwork = myNextList.find(
      a => a.id === songID
    );

    if (artwork.liked === false) {
      artwork.liked = true;
    } else {
      artwork.liked = false;
    }
    setMyList(myNextList);
  }

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


  return (
    <>
      <ArtistInfo />

      <div className="songsDiv">
        {listSongs}
      </div>

      <br /><br />

      <form>
        <input
          type="text"
          value={inputText}
          onChange={handleInput}
        />
        <button
          type="submit"
          onSubmit={handleSubmit}
        >Add</button>
      </form>


      <p className="read-the-docs">
        Footer
      </p>
    </>
  )
}

export default App
