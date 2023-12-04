import { useState } from 'react'
import banner from './assets/imagineDragons.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const songs = [
    { title: 'Believer', id: 1, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg', imageSize: 200, date: "2017" },
    { title: 'Radioactive', id: 2, imageUrl: 'https://i1.sndcdn.com/artworks-000058618127-o9ql4a-t500x500.jpg', imageSize: 200, date: "2012" },
    { title: 'Enemy', id: 3, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0cd265130636097.61842df318d10.jpg', imageSize: 200, date: "2021" },
  ];

  const listSongs = songs.map(song =>
    <div key={song.id} className="songDiv">
      <img
        className="cover"
        src={song.imageUrl}
        alt={'Photo of ' + song.name}
        style={{
          width: song.imageSize,
          height: song.imageSize
        }}
      />
      <h2>{song.title}</h2>
      <p>{song.date}</p>
    </div>
  );

  return (
    <>
      <div>
        <a href="https://www.imaginedragonsmusic.com/#/" target="_blank">
          <img src={banner} className="banner" alt="Imagine Dragons photo" />
        </a>
      </div>
      <h1>Imagine Dragons</h1>
      <p>Imagine Dragons is an American pop rock band based in Las Vegas, Nevada in 2008, and currently consists of lead singer Dan Reynolds, guitarist Wayne Sermon, bassist Ben McKee and drummer Daniel Platzman. The band first gained exposure with the release of their single "It's Time", followed by their debut album Night Visions (2012), which resulted in the chart-topping singles "Radioactive" and "Demons". Rolling Stone named "Radioactive", which held the record for most weeks charted on the Billboard Hot 100, the "biggest rock hit of the year". MTV called them "the year's biggest breakout band", and Billboard named them their "Breakthrough Band of 2013" and "Biggest Band of 2017", and placed them at the top of their "Year in Rock" rankings for 2013, 2017, and 2018. Imagine Dragons topped the Billboard Year-End "Top Artists – Duo/Group" category in 2018.</p>
      <div className="songsDiv">
        {listSongs}
      </div>


      <p className="read-the-docs">
        Footer
      </p>
    </>
  )
}

export default App
